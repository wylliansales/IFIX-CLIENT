import {NgModule} from '@angular/core';
import {StatusService} from './status.service';
import {NotificationsService} from './notifications.service';
import {SectorsService} from './sectors.service';
import {EquipmentsService} from './equipments.service';
import {CategoriesService} from './categories.service';
import {UsersService} from './users.service';
import {RequestsService} from './requests.service';
import {DepartamentsService} from './departaments.service';
import {LoginService} from './login.service';


@NgModule({
    declarations: [],
    imports: [],
    exports: [],
    providers: [StatusService,
                SectorsService,
                NotificationsService,
                EquipmentsService,
                CategoriesService,
                UsersService,
                RequestsService,
                DepartamentsService,
                LoginService]
})

export class ServicesModule{}
