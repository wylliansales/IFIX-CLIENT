import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {NotificationsService} from '../../services/notifications.service';
import {Department} from '../department.model';
import {DepartmentsService} from '../../services/departments.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-departments-form',
  templateUrl: './departments-form.component.html'
})
export class DepartmentsFormComponent implements OnInit {


    departmentForm: FormGroup
    departments: Department
    id: number

    constructor(private fb: FormBuilder,
                private departmentsService: DepartmentsService,
                private notificationsService: NotificationsService,
                private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.departmentForm = this.fb.group({
            name: this.fb.control('',[Validators.required]),
            description: this.fb.control('',[Validators.required])
        })

        this.id = parseInt(atob(this.activatedRoute.snapshot.params['id'])) || undefined
        this.getDepartment(this.id)
    }

    addSector(department: Department) {
        if(this.id){
            this.departmentsService.updateDepartment(department, this.id)
                .subscribe((response) => {
                    if(response['error']){
                        console.log(response['error_description'])
                    } else {
                        this.notificationsService.showNotification(`Departamento ${response['data'].name} atualizado com sucesso!`, 'success')
                    }
                })
        } else {
            this.departmentsService.addDepartment(department)
                .subscribe((response) => {
                    if(response['error']){
                        console.log(response['error_description'])
                    } else {
                        this.notificationsService.showNotification(`Departamento ${response['data'].name} cadastrado com sucesso!`, 'success')
                    }
                })
        }


        this.departmentForm.reset()
    }

    getDepartment(id: number) {
        if(id){
            this.departmentsService.getDepartmentById(id).subscribe(response => {
                this.departmentForm.setValue({
                    name: response['data'].name,
                    description: response['data'].description
                })
            })
        }
    }

}
