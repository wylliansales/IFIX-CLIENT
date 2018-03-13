import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from './users.component';
import { UsersBlockedComponent } from './users-blocked/users-blocked.component';
import { UsersReleasedComponent } from './users-released/users-released.component';


@NgModule({
    declarations: [UsersComponent, UsersBlockedComponent, UsersReleasedComponent],
    imports: [SharedModule, RouterModule]
})
export class UsersModule{}
