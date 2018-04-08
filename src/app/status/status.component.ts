import {Component, OnInit} from '@angular/core';

import {StatusService} from '../services/status.service';
import {NotificationsService} from '../services/notifications.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {Observable} from 'rxjs/Observable';


import {Status} from './status.model';
import {Subject} from 'rxjs/Subject';
import {Router} from '@angular/router';


@Component({
    selector: 'app-status',
    templateUrl: './status.component.html'
})
export class StatusComponent implements OnInit {

    status: Status[]
    meta: Meta
    pag: number = 1
    back: number = 1
    next: number = 2
    private searchText$ = new Subject<string>()

    constructor(private statusService: StatusService,
                private notificationsService: NotificationsService,
                private router: Router) {
    }

    ngOnInit() {
        this.statusService.getStatus().subscribe(
            response => {
                this.status = response['data'];
                this.meta = response['meta'];
            }
        );

        this.searchText$
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap(term =>
                this.statusService.searchStatus(term))
            .subscribe(status => {
                this.status = status['data']
                this.meta.total = this.status.length
            });


    }

    search(value: string) {
        this.searchText$.next(value)
    }

    delete(status: Status) {
        this.status = this.status.filter(s => s !== status);
        this.meta.total--;
        this.statusService.deleteStatus(status).subscribe(response =>
            this.notificationsService.showNotification(`${status.name} excluído`, 'success')
        );
    }

    edit(status: Status) {
        this.router.navigate([`/status/edit/${btoa(status.id)}`])
    }


    backPage(pag: number): void{
        if (this.back > 1) {
            this.back--;
            this.next--;
            this.pag--;
        }
        this.pag = this.next - this.back
        this.statusService.getStatus(pag).subscribe(
            response => {
                this.status = response['data'];
                this.meta = response['meta'];
            }
        );
    }

    nextPag(pag: number): void{
        if (this.next < this.meta.last_page){
            this.back++
            this.next++
            this.pag++
        }


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


