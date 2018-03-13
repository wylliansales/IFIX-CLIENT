import { Routes, RouterModule } from '@angular/router';
import {RequestsComponent} from './requests/requests.component';
import {UsersComponent} from './users/users.component';
import {UsersBlockedComponent} from './users/users-blocked/users-blocked.component';
import {UsersReleasedComponent} from './users/users-released/users-released.component';

export const ROUTES: Routes = [
    {path: 'panel',  component: RequestsComponent},
    {path: 'users', component: UsersComponent,
        children: [
            {path: '', redirectTo: 'blocked', pathMatch: 'full'},
            {path: 'blocked', component: UsersBlockedComponent},
            {path: 'released', component: UsersReleasedComponent}
        ]
    },
    {path: 'status', loadChildren: './status/status.module#StatusModule'},
    {path: 'sectors', loadChildren: './sectors/sectors.module#SectorsModule'},
    {path: 'equipments', loadChildren: './equipments/equipments.module#EquipmentsModule'},
    {path: '',           redirectTo: 'panel', pathMatch: 'full' }
]


