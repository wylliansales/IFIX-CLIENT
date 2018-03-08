import { Component, OnInit, Input } from '@angular/core';
import {Status} from '../status.model';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html'
})
export class StatusListComponent implements OnInit {

  @Input() status: Status[]
  constructor() { }

  ngOnInit() {
  }

}
