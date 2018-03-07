import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {StatusComponent} from './status.component';
import { StatusFormComponent } from './status-form/status-form.component';
import { StatusTableComponent } from './status-table/status-table.component';
import { StatusListComponent } from './status-list/status-list.component';
import { StatuComponent } from './status-list/statu/statu.component';


const ROUTES: Routes = [
    {path: '', component: StatusComponent,
        children: [
            {path: '', redirectTo: 'list', pathMatch: 'full'},
            {path: 'list', component: StatusListComponent},
            {path: 'new', component: StatusFormComponent}
        ]},

]

@NgModule({
    declarations: [StatusComponent, StatusFormComponent, StatusListComponent, StatuComponent],
    imports: [CommonModule, RouterModule.forChild(ROUTES)]
})

export class StatusModule {}