import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {NotificationsService} from '../../services/notifications.service';
import {Department} from '../department.model';
import {DepartmentsService} from '../../services/departments.service';

@Component({
  selector: 'app-departments-form',
  templateUrl: './departments-form.component.html'
})
export class DepartmentsFormComponent implements OnInit {


    departmentForm: FormGroup
    departments: Department

    constructor(private fb: FormBuilder,
                private departmentsService: DepartmentsService,
                private notificationsService: NotificationsService) { }

    ngOnInit() {
        this.departmentForm = this.fb.group({
            name: this.fb.control('',[Validators.required]),
            description: this.fb.control('',[Validators.required])
        })
    }

    addSector(department: Department) {
        this.departmentsService.addDepartament(department)
            .subscribe((response) => {
                if(response.error){
                    console.log(response.error_description)
                } else {
                    this.notificationsService.showNotification(`Departamento ${response['data'].name} cadastrado com sucesso!`, 'success')
                }
            })

        this.departmentForm.reset()
    }

}
