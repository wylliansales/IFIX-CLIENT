import { Routes, RouterModule } from '@angular/router';
import {RequestsComponent} from './requests/requests.component';

export const ROUTES: Routes = [
    {path: 'panel',  component: RequestsComponent},
    {path: 'attendants', loadChildren: './attendants/attendants.module#AttendantsModule'},
    {path: 'equipments', loadChildren: './equipments/equipments.module#EquipmentsModule'},
    {path: '',           redirectTo: 'panel', pathMatch: 'full' }
]


