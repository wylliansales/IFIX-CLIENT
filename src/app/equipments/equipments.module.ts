import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

import {EquipmentsComponent} from './equipments.component';
import { EquipmentFormComponent } from './equipment-form/equipment-form.component';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';


const ROUTES: Routes = [
    {path: '', component: EquipmentsComponent},
    {path: 'new', component: EquipmentFormComponent}

]

@NgModule({
    declarations: [EquipmentsComponent, EquipmentFormComponent, EquipmentListComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class EquipmentsModule{}
