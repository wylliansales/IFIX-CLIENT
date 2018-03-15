import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {User} from '../users/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  user(): User {
    return this.loginService.user
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn()
  }

  logout(){
    this.loginService.logout()
  }

}
