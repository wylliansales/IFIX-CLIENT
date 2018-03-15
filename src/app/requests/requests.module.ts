import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {RequestsComponent} from './requests.component';
import {RequestsListComponent} from './requests-list/requests-list.component';
import { RequestsNewsComponent } from './requests-news/requests-news.component';
import { RequestsLinkedComponent } from './requests-linked/requests-linked.component';
import { RequestsOpenComponent } from './requests-open/requests-open.component';
import { RequestsCloseComponent } from './requests-close/requests-close.component';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [RequestsComponent, RequestsListComponent, RequestsNewsComponent, RequestsLinkedComponent, RequestsOpenComponent, RequestsCloseComponent],
    imports: [SharedModule, RouterModule],
    exports: [RequestsListComponent]
})
export class RequestsModule{}