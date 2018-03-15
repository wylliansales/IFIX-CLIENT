import { Component, OnInit } from '@angular/core';

import {NotificationsService} from '../services/notifications.service';
import {Department} from './department.model';
import {DepartamentsService} from '../services/departaments.service';

@Component({
  selector: 'app-departaments',
  templateUrl: './departaments.component.html',
  styleUrls: ['./departaments.component.css']
})
export class DepartamentsComponent implements OnInit {

    departamens: Department[]
    meta: any
    back: number = 1
    next: number = 2

    constructor(private departamentsService: DepartamentsService,
                private notificationsService: NotificationsService) { }

    ngOnInit() {
        this.departamentsService.getDepartament().subscribe(
            response => {
                this.departamens = response['data'];
                this.meta = response['meta'];
            }
        );
    }

    delete(departament: Department) {
        this.departamens = this.departamens.filter(s => s !== departament);
        this.meta.total--;
        this.departamentsService.deleteDepartament(departament).subscribe(response =>
            this.notificationsService.showNotification(`${departament.name} excluído`, 'success')
        );
    }

    edit(sectors: Department) {
        console.log(`edit #{status.name}`)
    }

    backPage(pag: number): void{
        if (this.back > 1) {
            this.back--;
            this.next--;
        }
        this.departamentsService.getDepartament(pag).subscribe(
            response => {
                this.departamens = response['data'];
                this.meta = response['meta'];
            }
        );
    }

    nextPag(pag: number): void{
        if (this.next < this.meta.last_page)
            this.back++
        this.next++
        this.departamentsService.getDepartament(pag).subscribe(
            response => {
                this.departamens = response['data'];
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
