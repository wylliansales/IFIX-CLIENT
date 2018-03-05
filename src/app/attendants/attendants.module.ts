import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AttendantComponent } from './attendant/attendant.component';
import {AttendantsComponent} from './attendants.component';


const ROUTES: Routes = [
    {path: '', component: AttendantsComponent}
]

@NgModule({
    declarations: [AttendantsComponent, AttendantComponent],
    imports: [RouterModule.forChild(ROUTES)],
    exports: [],
    providers: []
})

export class AttendantsModule{

}