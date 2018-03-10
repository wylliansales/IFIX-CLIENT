import {NgModule} from '@angular/core';
import {StatusService} from './status.service';
import {NotificationsService} from './notifications.service';
import {SectorsService} from './sectors.service';


@NgModule({
    declarations: [],
    imports: [],
    exports: [],
    providers: [StatusService, SectorsService, NotificationsService]
})

export class ServicesModule{}
