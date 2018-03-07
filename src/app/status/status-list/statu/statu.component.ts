import {Component, Input, OnInit} from '@angular/core';
import {Status} from '../../status.model';


@Component({
  selector: 'app-statu',
  templateUrl: './statu.component.html',
  styleUrls: ['./statu.component.css']
})
export class StatuComponent implements OnInit {

  @Input() status: Status[]

  constructor() { }

  ngOnInit() {
  }

}
