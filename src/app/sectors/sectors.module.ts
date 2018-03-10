import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

import {SectorsComponent} from './sectors.component';
import { SectorsListComponent } from './sectors-list/sectors-list.component';
import { SectorsFormComponent } from './sectors-form/sectors-form.component';

const ROUTES: Routes = [
    {path: '', component: SectorsComponent},
    {path: 'new', component: SectorsFormComponent}
    ]

@NgModule({
    declarations: [SectorsComponent, SectorsListComponent, SectorsFormComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class SectorsModule{}