import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {EquipmentsComponent} from './equipments.component';

const ROUTES: Routes = [
    {path: '', component: EquipmentsComponent}
]

@NgModule({
    declarations: [EquipmentsComponent],
    imports: [CommonModule, RouterModule.forChild(ROUTES)]
})

export class EquipmentsModule{}
