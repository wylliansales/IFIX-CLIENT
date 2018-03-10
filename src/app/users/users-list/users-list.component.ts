import { Component, OnInit, Input } from '@angular/core';
import {EventEmitter, Output} from '@angular/core';

import {User} from '../user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input() users: User
  @Output() delete = new EventEmitter<User>()
  @Output() edit = new EventEmitter<User>()

  constructor() { }

  ngOnInit() {
  }

    getActive(user: User): string {
        if (user.activated) {
            return 'Sim';
        }
        return 'Não';
    }

    emitDelete(user: User) {
      return this.delete.emit(user);
    }

    emitEdit(user: User) {
      return this.edit.emit(user);
    }
}
