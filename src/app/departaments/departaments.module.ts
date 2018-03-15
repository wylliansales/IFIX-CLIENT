import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {DepartamentsComponent} from './departaments.component';
import {DepartamentListComponent} from './departament-list/departament-list.component';


const ROUTES: Routes = [
    {path: '', component: DepartamentListComponent},
    {path: 'new', component: DepartamentListComponent}
]

@NgModule({
    declarations: [DepartamentsComponent, DepartamentListComponent, DepartamentListComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class DepartamentsModule{}