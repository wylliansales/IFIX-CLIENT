import { Component, OnInit, Input, Output } from '@angular/core';
import {EventEmitter} from '@angular/core';
import {Status} from '../status.model';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html'
})
export class StatusListComponent implements OnInit {

  @Input() status: Status[]
  @Output() delete = new EventEmitter<Status>()
  @Output() edit = new EventEmitter<Status>()


  constructor() { }

  ngOnInit() {
  }

  emitDelete(status: Status){
    this.delete.emit(status)
  }

  emitEdit(status: Status){
    this.edit.emit(status)
  }

}
