import { Component, OnInit } from '@angular/core';
import {RequestItem} from '../request-item.model';
import {RequestsService} from '../../services/requests.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-requests-news',
  templateUrl: './requests-news.component.html',
  styleUrls: ['./requests-news.component.css']
})
export class RequestsNewsComponent implements OnInit {

  requestItems: RequestItem[]

  constructor(private requestsService: RequestsService,
              private  router: Router) { }

  ngOnInit() {
      this.requestsService.getNewRequests().subscribe( response => this.requestItems = response['data']);
  }


    meet(request: RequestItem) {
        this.requestsService.meetRequest(request).subscribe(response => {
            this.router.navigate(['/requests/detail', btoa(response['data'])]);
        });
    }
}