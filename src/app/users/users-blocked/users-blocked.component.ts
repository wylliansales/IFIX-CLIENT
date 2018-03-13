import {Component, OnInit} from '@angular/core';
import {User} from '../user.model';
import {UsersService} from '../../services/users.service';
import {NotificationsService} from '../../services/notifications.service';

@Component({
    selector: 'app-users-blocked',
    templateUrl: './users-blocked.component.html',
    styleUrls: ['./users-blocked.component.css']
})
export class UsersBlockedComponent implements OnInit {

    users: User[];

    constructor(private usersService: UsersService,
                private notification: NotificationsService) {
    }

    ngOnInit() {
        this.usersService.getUsersBlocked().subscribe(response => this.users = response['data']);
    }

    releaseUser(user: User) {
        this.users = this.users.filter(u => u !== user);
        this.usersService.releaseUser(user).subscribe(response =>
            this.notification.showNotification(`${response.data.name} liberado`, 'success')
        );
    }
}
