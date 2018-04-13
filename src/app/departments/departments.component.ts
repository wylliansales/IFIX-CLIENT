import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {DepartmentsService} from '../services/departments.service';
import {NotificationsService} from '../services/notifications.service';

import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {Department} from './department.model';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
})
export class DepartmentsComponent implements OnInit {

    departments: Department[]
    meta: Meta
    back: number = 1
    next: number = 2
    pag: number = 1
    private searchDepartment$ = new Subject<string>()

    constructor(private departmentsService: DepartmentsService,
                private notificationsService: NotificationsService,
                private router: Router) { }

    ngOnInit() {
        this.departmentsService.getDepartment().subscribe(
            response => {
                this.departments = response['data']
                this.meta = response['meta']
            }
        );
        this.searchDepartment$
          .debounceTime(300)
          .distinctUntilChanged()
          .switchMap( term => this.departmentsService.searchDepartments(term)).subscribe( response => {
          this.departments = response['data']
        })
    }

    search(term: string){
      this.searchDepartment$.next(term)
    }

    delete(department: Department) {
        this.departments = this.departments.filter(d => d !== department)
        this.meta.total--;
        this.departmentsService.deleteDepartment(department).subscribe(response => {
            this.notificationsService.showNotification(`${department.name} excluído`, 'success')

        });
    }

    edit(department: Department) {
        this.router.navigate([`/departments/edit/${btoa(department.id.toString())}`])
    }

    backPage(pag: number): void{
        if (this.back > 1) {
            this.back--;
            this.next--;
            this.pag--;
        }
        this.departmentsService.getDepartment(pag).subscribe(
            response => {
                this.departments = response['data'];
                this.meta = response['meta'];
            }
        );
    }

    nextPag(pag: number): void{
        if (this.next < this.meta.last_page){
            this.back++
            this.next++
            this.pag++;
        }

        this.departmentsService.getDepartment(pag).subscribe(
            response => {
                this.departments = response['data'];
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
