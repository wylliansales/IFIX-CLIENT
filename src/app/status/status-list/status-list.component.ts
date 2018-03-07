import { Component, OnInit } from '@angular/core';
import {Status} from '../status.model';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {

  status: Status[]

  constructor() { }

  ngOnInit() {
  }

}
