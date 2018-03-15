import { Component, OnInit } from '@angular/core';
import {RequestItem} from '../request-item.model';
import {RequestsService} from '../../services/requests.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-requests-open',
  templateUrl: './requests-open.component.html',
  styleUrls: ['./requests-open.component.css']
})
export class RequestsOpenComponent implements OnInit {

  requestItems: RequestItem[]

  constructor(private requestsService: RequestsService,
              private router: Router) { }

  ngOnInit() {
    this.requestsService.getOpenRequests().subscribe(response => this.requestItems = response['data'])
  }


    detailRequest(request: RequestItem) {
        this.requestsService.meetRequest(request).subscribe(response => {
            this.router.navigate(['/requests/detail', btoa(response['data'])]);
        });
    }

}
