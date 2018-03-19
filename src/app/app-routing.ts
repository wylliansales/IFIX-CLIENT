import { Routes, RouterModule } from '@angular/router';
import {RequestsComponent} from './requests/requests.component';
import {UsersComponent} from './users/users.component';
import {UsersBlockedComponent} from './users/users-blocked/users-blocked.component';
import {UsersReleasedComponent} from './users/users-released/users-released.component';
import {RequestDetailComponent} from './request-detail/request-detail.component';
import {RequestsNewsComponent} from './requests/requests-news/requests-news.component';
import {RequestsLinkedComponent} from './requests/requests-linked/requests-linked.component';
import {RequestsOpenComponent} from './requests/requests-open/requests-open.component';
import {RequestsCloseComponent} from './requests/requests-close/requests-close.component';
import {MyRequestsComponent} from './my-requests/my-requests.component';
import {LoginComponent} from './security/login/login.component';
import {LoggedInGuard} from './security/loggedin.guard';

export const ROUTES: Routes = [
    {path: 'login/:to',  component: LoginComponent},
    {path: 'login',  component: LoginComponent},
    {path: 'users', component: UsersComponent,
        children: [
            {path: '', redirectTo: 'blocked', pathMatch: 'full'},
            {path: 'blocked', component: UsersBlockedComponent},
            {path: 'released', component: UsersReleasedComponent}
        ],
        canActivate: [LoggedInGuard]
    },
    {path: 'requests', component: RequestsComponent,
        children: [
            {path: '', redirectTo: 'news', pathMatch: 'full'},
            {path: 'news', component: RequestsNewsComponent},
            {path: 'linked-request', component: RequestsLinkedComponent},
            {path: 'open-request', component: RequestsOpenComponent},
            {path: 'close-request', component: RequestsCloseComponent}
        ],
        canActivate: [LoggedInGuard]
    },
    {path: 'requests/detail/:id', component: RequestDetailComponent,
        canActivate: [LoggedInGuard]},
    {path: 'my-requests', component: MyRequestsComponent,
        canActivate: [LoggedInGuard]},
    {path: 'status', loadChildren: './status/status.module#StatusModule',
        canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},
    {path: 'sectors', loadChildren: './sectors/sectors.module#SectorsModule',
        canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},
    {path: 'equipments', loadChildren: './equipments/equipments.module#EquipmentsModule',
        canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},
    {path: 'departments', loadChildren: './departments/departments.module#DepartmentsModule',
        canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},
    {path: 'categories', loadChildren: './categories/categories.module#CategoriesModule',
        canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},
    {path: 'attendants', loadChildren: './attendants/attendants.module#AttendantsModule',
        canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},
    {path: '',           redirectTo: 'requests', pathMatch: 'full'}
]


