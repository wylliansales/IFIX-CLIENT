import { Component, OnInit } from '@angular/core';

import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'

import {User} from '../../users/user.model';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-attendants-new',
  templateUrl: './attendants-new.component.html',
  styleUrls: ['./attendants-new.component.css']
})
export class AttendantsNewComponent implements OnInit {

  users: User[]
  searchUser$ = new Subject<string>()

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.searchUser$
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => this.usersService.searchUser(term))
      .subscribe(response => this.users = response['data'])
  }

  search(term: string){
    this.searchUser$.next(term)
  }

}
