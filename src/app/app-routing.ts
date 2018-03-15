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
import {DepartamentsModule} from './departaments/departaments.module';

export const ROUTES: Routes = [
    {path: 'panel',  component: RequestsComponent},
    {path: 'users', component: UsersComponent,
        children: [
            {path: '', redirectTo: 'blocked', pathMatch: 'full'},
            {path: 'blocked', component: UsersBlockedComponent},
            {path: 'released', component: UsersReleasedComponent}
        ]
    },
    {path: 'requests', component: RequestsComponent,
        children: [
            {path: '', redirectTo: 'news', pathMatch: 'full'},
            {path: 'news', component: RequestsNewsComponent},
            {path: 'linked-request', component: RequestsLinkedComponent},
            {path: 'open-request', component: RequestsOpenComponent},
            {path: 'close-request', component: RequestsCloseComponent}
        ]
    },
    {path: 'requests/detail/:id', component: RequestDetailComponent},
    {path: 'my-requests', component: MyRequestsComponent},
    {path: 'status', loadChildren: './status/status.module#StatusModule'},
    {path: 'sectors', loadChildren: './sectors/sectors.module#SectorsModule'},
    {path: 'equipments', loadChildren: './equipments/equipments.module#EquipmentsModule'},
    {path: 'departaments', loadChildren: './departaments/departaments.module#DepartamentsModule'},
    {path: '',           redirectTo: 'requests', pathMatch: 'full' }
]


