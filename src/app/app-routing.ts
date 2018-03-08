import { Routes, RouterModule } from '@angular/router';
import {RequestsComponent} from './requests/requests.component';

export const ROUTES: Routes = [
    {path: 'panel',  component: RequestsComponent},
    {path: 'status', loadChildren: './status/status.module#StatusModule'},
    {path: '',           redirectTo: 'panel', pathMatch: 'full' }
]


