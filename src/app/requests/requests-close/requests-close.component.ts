import { Component, OnInit } from '@angular/core';
import {RequestItem} from '../request-item.model';
import {RequestsService} from '../../services/requests.service';

@Component({
  selector: 'app-requests-close',
  templateUrl: './requests-close.component.html',
  styleUrls: ['./requests-close.component.css']
})
export class RequestsCloseComponent implements OnInit {

  requestItems: RequestItem[]

  constructor(private requestsService: RequestsService) { }

  ngOnInit() {
    this.requestsService.getClosedReqquest().subscribe(response => this.requestItems = response['data'])
  }

}
