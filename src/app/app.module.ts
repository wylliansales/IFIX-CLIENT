import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import {RouterModule, PreloadAllModules, PreloadingStrategy} from '@angular/router';
import {ROUTES} from './app-routing';

import {AppComponent} from './app.component';
import {LoginComponent} from './security/login/login.component';

import {ComponentsModule} from './components/components.module';
import {ServicesModule} from './services/services.module';
import {httpInterceptorsProviders} from './http-interceptors/interceptors';

import {SharedModule} from './shared/shared.module';
import {AplicationErrorHandle} from './app.error-handler';

import {UsersModule} from './users/users.module';
import {RequestDetailComponent} from './request-detail/request-detail.component';
import {RequestsModule} from './requests/requests.module';
import {MyRequestsComponent} from './my-requests/my-requests.component';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RequestDetailComponent,
        MyRequestsComponent,
    ],
    imports: [
        BrowserModule,
        NgProgressModule,
        ReactiveFormsModule,
        SharedModule.forRoot(),
        ServicesModule,
        ComponentsModule,
        UsersModule,
        RequestsModule,
        HttpClientModule,
        RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
    ],
    providers: [httpInterceptorsProviders, {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: ErrorHandler, useClass: AplicationErrorHandle}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
