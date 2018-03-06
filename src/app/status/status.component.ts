import { Component, OnInit } from '@angular/core';
import {StatusService} from '../core/status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  data: any

  constructor(private statusService: StatusService) { }

  ngOnInit() {
  }

  getStatus(){
    this.statusService.getStatus().subscribe( data => console.log(data))
  }


}
