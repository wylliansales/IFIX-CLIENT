import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationsService} from '../../services/notifications.service';

import {Attendant} from '../../attendants/attendant.model';
import {AttendantsService} from '../../services/attendants.service';

@Component({
  selector: 'app-attendants-form',
  templateUrl: './attendants-form.component.html',
  styleUrls: ['./attendants-form.component.css']
})
export class AttendantsFormComponent implements OnInit {

    attendantForm: FormGroup
    attendants: Attendant[]

    constructor(private fb: FormBuilder,
                private attendantsService: AttendantsService,
                private notificationsService: NotificationsService) { }

    ngOnInit() {
        this.attendantForm = this.fb.group({
            name: this.fb.control('',[Validators.required]),
            email: this.fb.control('',[Validators.required, Validators.email]),
            password: this.fb.control('',[Validators.required])
        })
    }

    addAttendant(attendant: Attendant) {
        this.attendantsService.addAttendant(attendant)
            .subscribe((response) => {
                if(response.error){
                    console.log(response.error_description)
                } else {
                    this.notificationsService.showNotification(`Categoria ${response['data'].name} cadastrado com sucesso!`, 'success')
                }
            })

        this.attendantForm.reset()
    }

}
