import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {StatusService} from '../../services/status.service';
import {Status} from '../status.model';
import {NotificationsService} from '../../services/notifications.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html'
})
export class StatusFormComponent implements OnInit {

    stForm: FormGroup
    status: Status
    id: string

    constructor(private fb: FormBuilder,
                private statusService: StatusService,
                private notificationsService: NotificationsService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.stForm = this.fb.group({
            name: this.fb.control('', [Validators.required]),
            description: this.fb.control('', [Validators.required])
        })

        this.id = atob(this.activatedRoute.snapshot.params['id'])
        this.getStatus(this.id)
    }

    addStatus(status: Status) {
        if(this.id){
            this.statusService.updateStatus(status, this.id)
                .subscribe((response) => {
                    if(response['error']){
                        console.log(response['error_description'])
                    } else {
                        this.notificationsService.showNotification(`Status ${response['data'].name} atualizado com sucesso!`, 'success')
                    }
                })
        } else {
            this.statusService.addStatus(status)
                .subscribe((response) => {
                    if(response.error){
                        console.log(response.error_description)
                    } else {
                        this.notificationsService.showNotification(`Status ${response['data'].name} cadastrado com sucesso!`, 'success')
                    }
                })
        }



        this.stForm.reset()
    }

    getStatus(id: string){
        if(id){
           this.statusService.getStatusById(id).subscribe(response => {
               this.stForm.setValue({
                   name: response['data'].name,
                   description: response['data'].description
               })
           })
        }
    }


}
