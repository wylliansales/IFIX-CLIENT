import {Component, OnInit} from '@angular/core';

import {StatusService} from '../services/status.service';
import {NotificationsService} from '../services/notifications.service';

import {Status} from './status.model';

@Component({
    selector: 'app-status',
    templateUrl: './status.component.html'
})
export class StatusComponent implements OnInit {

    status: Status[];
    meta: Meta;



    constructor(private statusService: StatusService,
                private notificationsService: NotificationsService) {
    }

    ngOnInit() {
        this.statusService.getStatus().subscribe(
            response => {
                this.status = response['data'];
                this.meta = response['meta'];
            }
        );
    }

    getCurrentPage(pag: number){
        this.statusService.getStatus(pag).subscribe(
            response => {
                this.status = response['data'];
                this.meta = response['meta'];
            }
        )
    }

    getLastPage(pag: number){
        this.statusService.getStatus(pag).subscribe(
            response => {
                this.status = response['data'];
                this.meta = response['meta'];
            }
        )
    }

    getStatusPag(pag: number){
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


