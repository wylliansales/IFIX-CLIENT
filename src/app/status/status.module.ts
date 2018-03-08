import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {StatusComponent} from './status.component';
import { StatusFormComponent } from './status-form/status-form.component';
import { StatusListComponent } from './status-list/status-list.component';



const ROUTES: Routes = [
    {path: '', component: StatusComponent},
    {path: 'new', component: StatusFormComponent}
    ]

@NgModule({
    declarations: [StatusComponent, StatusFormComponent, StatusListComponent],
    imports: [CommonModule, RouterModule.forChild(ROUTES), ReactiveFormsModule],
})

export class StatusModule {}