import {Component, OnInit} from '@angular/core';
import {Request} from './request.model';
import {ActivatedRoute, Router} from '@angular/router';
import {RequestsService} from '../services/requests.service';
import {NotificationsService} from '../services/notifications.service';

@Component({
    selector: 'app-request-detail',
    templateUrl: './request-detail.component.html',
    styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

    request: Request;

    constructor(private  route: ActivatedRoute,
                private resquestsService: RequestsService,
                private notification: NotificationsService,
                private router: Router) {
    }

    ngOnInit() {
        this.resquestsService.requestById(atob(this.route.snapshot.params['id']))
            .subscribe(response => {
                this.request = response['data']
            })
    }

    finalizeRequest(request: Request){
        this.resquestsService.finalizeRequest(request).subscribe(response => {
            this.notification.showNotification(`Solicitação #${response['data'].id} finalizada`, 'success')
            this.router.navigate(['/requests']);
        })
    }

}
