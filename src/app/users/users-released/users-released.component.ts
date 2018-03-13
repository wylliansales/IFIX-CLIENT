import { Component, OnInit } from '@angular/core';
import {User} from '../user.model';
import {UsersService} from '../../services/users.service';
import {NotificationsService} from '../../services/notifications.service';

@Component({
  selector: 'app-users-released',
  templateUrl: './users-released.component.html',
  styleUrls: ['./users-released.component.css']
})
export class UsersReleasedComponent implements OnInit {

    users: User[]

  constructor(private usersService: UsersService,
              private notification: NotificationsService) { }

  ngOnInit() {
      this.usersService.getUsersReleased().subscribe(response => this.users = response['data']);
  }

    blokedUser(user: User) {
        this.users = this.users.filter(u => u !== user);
        this.usersService.blokedUser(user).subscribe(response =>
            this.notification.showNotification(`${response.data.name} bloqueado`, 'success')
        );
    }
}
