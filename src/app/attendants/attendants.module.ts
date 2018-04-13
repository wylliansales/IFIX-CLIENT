import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AttendantComponent } from './attendant/attendant.component';
import {AttendantsComponent} from './attendants.component';
import { AttendantsListComponent } from './attendants-list/attendants-list.component';
import { AttendantsFormComponent } from './attendants-form/attendants-form.component';
import {SharedModule} from '../shared/shared.module';
import { AttendantsNewComponent } from './attendants-new/attendants-new.component';
import { AttendantsFormListComponent } from './attendants-form-list/attendants-form-list.component';


const ROUTES: Routes = [
    {path: '', component: AttendantsComponent},
    {path: 'new', component: AttendantsNewComponent},
]

@NgModule({
    declarations: [AttendantsComponent, AttendantComponent, AttendantsListComponent, AttendantsFormComponent, AttendantsNewComponent, AttendantsFormListComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)],
    exports: [],
    providers: []
})

export class AttendantsModule{

}
