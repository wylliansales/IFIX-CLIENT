import { Component, OnInit } from '@angular/core';
import {NotificationsService} from '../services/notifications.service';

import {Attendant} from '../attendants/attendant.model';
import {AttendantsService} from '../services/attendants.service';

@Component({
  selector: 'app-attendants',
  templateUrl: './attendants.component.html',
  styleUrls: ['./attendants.component.css']
})
export class AttendantsComponent implements OnInit {

    attendants: Attendant[]
    meta: Meta
    back: number = 1
    next: number = 2

    constructor(private attendantsService: AttendantsService,
                private notificationsService: NotificationsService) { }

    ngOnInit() {
        this.attendantsService.getAttendant().subscribe(
            response => {
                this.attendants = response['data'];
                this.meta = response['meta'];
            }
        );
    }

    delete(attendant: Attendant) {
        this.attendants = this.attendants.filter(d => d !== attendant)
        this.meta.total--;
        this.attendantsService.deleteAttendant(attendant).subscribe(response => {
            this.notificationsService.showNotification(`${attendant.name} excluído`, 'success')

        });
    }

    edit(attendant: Attendant) {
        console.log(`edit #{attendant.name}`)
    }

    backPage(pag: number): void{
        if (this.back > 1) {
            this.back--;
            this.next--;
        }
        this.attendantsService.getAttendant(pag).subscribe(
            response => {
                this.attendants = response['data'];
                this.meta = response['meta'];
            }
        );
    }

    nextPag(pag: number): void{
        if (this.next < this.meta.last_page)
            this.back++
        this.next++
        this.attendantsService.getAttendant(pag).subscribe(
            response => {
                this.attendants = response['data'];
                this.meta = response['meta'];
            }
        )
    }

}


class Meta {
    current_page: number
    from: number
    last_page: number
    total: number
}