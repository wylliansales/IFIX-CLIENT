import {Component, OnInit} from '@angular/core';
import {FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Request} from './request.model';
import {ActivatedRoute, Router} from '@angular/router';
import {RequestsService} from '../services/requests.service';
import {NotificationsService} from '../services/notifications.service';
import {StatusService} from '../services/status.service';
import {Status} from '../status/status.model';
import {StatusRequest} from './status-request.model';

declare var $: any;

@Component({
    selector: 'app-request-detail',
    templateUrl: './request-detail.component.html',
    styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

    request: Request;
    status: Status[]
    statusRequest: StatusRequest[]
    statusForm: FormGroup
    cont: number = 0

    constructor(private  route: ActivatedRoute,
                private requestsService: RequestsService,
                private notification: NotificationsService,
                private statusService: StatusService,
                private router: Router,
                private fb: FormBuilder) {
    }

    ngOnInit() {
        this.statusForm = this.fb.group({
              request_id: this.fb.control(atob(this.route.snapshot.params['id']),[Validators.required]),
              status_id: this.fb.control('',[Validators.required]),
              observation: this.fb.control('',[Validators.required])
        })

        this.requestsService.requestById(atob(this.route.snapshot.params['id']))
            .subscribe(response => {
                this.request = response['data']
            })
        this.requestsService.getStatusRequest(atob(this.route.snapshot.params['id'])).subscribe(response => this.statusRequest = response['data'])
        this.statusService.getStatus().subscribe( response => this.status = response['data'])

    }

    finalizeRequest(request: Request){
        this.requestsService.finalizeRequest(request).subscribe(response => {
            this.notification.showNotification(`Solicitação #${response['data'].id} finalizada`, 'success')
            this.router.navigate(['/requests']);
        })
    }

  defineStatus(statu: any){
      $('#exampleModal').modal('hide')

      this.requestsService.setStatus(statu).subscribe(response => {
        this.statusRequest = response['data']
      })
      this.statusForm.reset()
  }

}
