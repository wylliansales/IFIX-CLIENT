import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'

import {NotificationsService} from '../services/notifications.service';
import {AttendantsService} from '../services/attendants.service';

import {Attendant} from '../attendants/attendant.model';

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
    searchAttendant$ = new Subject<string>()

    constructor(private attendantsService: AttendantsService,
                private notificationsService: NotificationsService,
                private router: Router) { }

    ngOnInit() {
        this.attendantsService.getAttendant().subscribe(
            response => {
                this.attendants = response['data'];
                this.meta = response['meta'];
            }
        );

        this.searchAttendant$
          .debounceTime(300)
          .distinctUntilChanged()
          .switchMap(term => this.attendantsService.searchAttendant(term))
          .subscribe(response => this.attendants = response['data'])
    }

    search(term: string){
      this.searchAttendant$.next(term)
    }

    delete(attendant: Attendant) {
      alert('Acão não permitida!')
     /*   this.attendants = this.attendants.filter(d => d !== attendant)
        this.meta.total--;
        this.attendantsService.deleteAttendant(attendant).subscribe(response => {
            this.notificationsService.showNotification(`${attendant.name} excluído`, 'success')

        });*/
    }

    edit(attendant: Attendant) {
       alert('Não é possível editar atendente, você só pode editar o seu perfil');
    }

    blocked(attendant: Attendant) {

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
