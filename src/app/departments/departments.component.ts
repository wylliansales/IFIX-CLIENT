import { Component, OnInit } from '@angular/core';
import {DepartmentsService} from '../services/departments.service';
import {Department} from './department.model';
import {NotificationsService} from '../services/notifications.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
})
export class DepartmentsComponent implements OnInit {

    departments: Department[]
    meta: any
    back: number = 1
    next: number = 2

    constructor(private departmentsService: DepartmentsService,
                private notificationsService: NotificationsService) { }

    ngOnInit() {
        this.departmentsService.getDepartament().subscribe(
            response => {
                this.departments = response['data'];
                this.meta = response['meta'];
            }
        );
    }

    delete(departament: Department) {
        this.departments = this.departments.filter(d => d !== departament)
        this.meta.total--;
        this.departmentsService.deleteDepartament(departament).subscribe(response => {
            this.notificationsService.showNotification(`${departament.name} excluído`, 'success')

        });
    }

    edit(sectors: Department) {
        console.log(`edit #{status.name}`)
    }

    backPage(pag: number): void{
        if (this.back > 1) {
            this.back--;
            this.next--;
        }
        this.departmentsService.getDepartament(pag).subscribe(
            response => {
                this.departments = response['data'];
                this.meta = response['meta'];
            }
        );
    }

    nextPag(pag: number): void{
        if (this.next < this.meta.last_page)
            this.back++
        this.next++
        this.departmentsService.getDepartament(pag).subscribe(
            response => {
                this.departments = response['data'];
                this.meta = response['meta'];
            }
        )
    }


}
