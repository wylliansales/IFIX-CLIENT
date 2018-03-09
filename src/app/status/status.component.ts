import {Component, OnInit} from '@angular/core';

import {StatusService} from '../services/status.service';
import {NotificationsService} from '../services/notifications.service';

import {Status} from './status.model';

@Component({
    selector: 'app-status',
    templateUrl: './status.component.html'
})
export class StatusComponent implements OnInit {

    status: Status[]
    meta: Meta
    back: number = 1
    next: number = 2


    constructor(private statusService: StatusService,
                private notificationsService: NotificationsService) {
    }

    ngOnInit() {
        this.statusService.getStatus().subscribe(
            response => {
                this.status = response['data'];
                this.meta = response['meta'];
                console.log(response['meta']);
            }
        );
    }

    delete(status: Status) {
        this.status = this.status.filter(s => s !== status);
        this.statusService.deleteStatus(status).subscribe(response =>
            this.notificationsService.showNotification(`${status.name} excluído`, 'success')
        );
    }

    edit(status: Status) {
        console.log(`edit #{status.name}`)
    }

    backPage(pag: number): void{
        if (this.back > 1) {
            this.back--;
            this.next--;
        }
        this.statusService.getStatus(pag).subscribe(
            response => {
                this.status = response['data'];
                this.meta = response['meta'];
            }
        );
    }

    nextPag(pag: number): void{
        if (this.next < this.meta.last_page)
        this.back++
        this.next++
        this.statusService.getStatus(pag).subscribe(
            response => {
                this.status = response['data'];
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


