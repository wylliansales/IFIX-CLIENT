import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {User} from '../../users/user.model';

@Component({
    selector: 'app-attendants-form-list',
    templateUrl: './attendants-form-list.component.html',
    styleUrls: ['./attendants-form-list.component.css']
})
export class AttendantsFormListComponent implements OnInit {

    @Input() users: User[]
    @Output() defineAttendant = new EventEmitter<User>()

    constructor() {
    }

    ngOnInit() {

    }

  emitDefineAttendant(user: User){
      this.defineAttendant.emit(user)
  }
}
