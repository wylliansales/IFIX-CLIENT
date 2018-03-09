import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {StatusComponent} from './status.component';
import { StatusFormComponent } from './status-form/status-form.component';
import { StatusListComponent } from './status-list/status-list.component';
import {SharedModule} from '../shared/shared.module';



const ROUTES: Routes = [
    {path: '', component: StatusComponent},
    {path: 'new', component: StatusFormComponent}
    ]

@NgModule({
    declarations: [StatusComponent, StatusFormComponent, StatusListComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)],
})

export class StatusModule {}