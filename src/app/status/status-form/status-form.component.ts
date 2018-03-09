import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {StatusService} from '../../services/status.service';
import {Status} from '../status.model';
import {NotificationsService} from '../../services/notifications.service';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html'
})
export class StatusFormComponent implements OnInit {

    stForm: FormGroup
    status: Status

    constructor(private fb: FormBuilder,
                private statusService: StatusService,
                private notificationsService: NotificationsService) {
    }

    ngOnInit() {
        this.stForm = this.fb.group({
            name: this.fb.control('', [Validators.required]),
            description: this.fb.control('', [Validators.required])
        })
    }

    addStatus(status: Status) {
        this.statusService.addStatus(status)
            .subscribe((response) => {
                if(response.error){
                    console.log(response.error_description)
                } else {
                    this.notificationsService.showNotification(`Status ${response['data'].name} cadastrado com sucesso!`, 'success')
                }
            })

        this.stForm.reset()
    }
}
