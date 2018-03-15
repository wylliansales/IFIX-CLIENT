import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../services/requests.service';
import {RequestItem} from '../requests/request-item.model';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {

  requests: RequestItem

  constructor(private requestsService: RequestsService) { }

  ngOnInit() {
      this.requestsService.myRequests().subscribe(response => {
        this.requests = response['data']
      })
  }

}
