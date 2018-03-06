import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {StatusComponent} from './status.component';
import { StatuComponent } from './statu/statu.component';
import { FormStatusComponent } from './form-status/form-status.component';


const ROUTES: Routes = [
    {path: '', component: StatusComponent,
        children: [
            {path: '', redirectTo: 'status', pathMatch: 'full'},
            {path: 'status', component: StatuComponent},
            {path: 'new', component: FormStatusComponent}
        ]},

]

@NgModule({
    declarations: [StatusComponent, StatuComponent, FormStatusComponent],
    imports: [CommonModule, RouterModule.forChild(ROUTES)]
})

export class StatusModule {}