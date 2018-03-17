import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AttendantComponent } from './attendant/attendant.component';
import {AttendantsComponent} from './attendants.component';
import { AttendantsListComponent } from './attendants-list/attendants-list.component';
import { AttendantsFormComponent } from './attendants-form/attendants-form.component';


const ROUTES: Routes = [
    {path: '', component: AttendantsComponent},
    {path: 'new', component: AttendantsFormComponent}
]

@NgModule({
    declarations: [AttendantsComponent, AttendantComponent, AttendantsListComponent, AttendantsFormComponent],
    imports: [RouterModule.forChild(ROUTES)],
    exports: [],
    providers: []
})

export class AttendantsModule{

}