import {NgModule} from '@angular/core';
import {StatusService} from './status.service';
import {NotificationsService} from './notifications.service';
import {SectorsService} from './sectors.service';
import {EquipmentsService} from './equipments.service';
import {CategoriesService} from './categories.service';


@NgModule({
    declarations: [],
    imports: [],
    exports: [],
    providers: [StatusService, SectorsService, NotificationsService, EquipmentsService, CategoriesService]
})

export class ServicesModule{}
