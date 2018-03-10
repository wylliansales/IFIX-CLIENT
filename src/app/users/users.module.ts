import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from './users.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersListComponent } from './users-list/users-list.component';

const ROUTES: Routes = [
    {path: '', component: UsersComponent},
    {path: 'new', component: UsersFormComponent}
]

@NgModule({
    declarations: [UsersComponent, UsersFormComponent, UsersListComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class UsersModule{}
