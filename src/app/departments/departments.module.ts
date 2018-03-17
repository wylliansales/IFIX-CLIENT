import {NgModule} from '@angular/core';
import {DepartmentsComponent} from './departments.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {DepartmentsListComponent} from './departments-list/departments-list.component';
import {DepartmentsFormComponent} from './departments-form/departments-form.component';

const ROUTES: Routes = [
    {path: '', component: DepartmentsComponent},
    {path: 'new', component: DepartmentsFormComponent}
]

@NgModule({
    declarations: [DepartmentsListComponent, DepartmentsFormComponent, DepartmentsComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class DepartmentsModule{}