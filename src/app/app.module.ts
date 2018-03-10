import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import {RouterModule, PreloadAllModules, PreloadingStrategy} from '@angular/router';
import { ROUTES } from './app-routing';

import { AppComponent } from './app.component';
import { RequestsComponent } from './requests/requests.component';
import { LoginComponent } from './security/login/login.component';

import { ComponentsModule } from './components/components.module';
import {ServicesModule} from './services/services.module';
import {httpInterceptorsProviders} from './http-interceptors/interceptors';
import { RequestsListComponent } from './requests/requests-list/requests-list.component';
import {SectorsComponent} from './sectors/sectors.component';
import {SharedModule} from './shared/shared.module';
import {AplicationErrorHandle} from './app.error-handler';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestsComponent,
    LoginComponent,
    RequestsListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SharedModule,
    ServicesModule,
    ComponentsModule,
    HttpClientModule,

    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [httpInterceptorsProviders, {provide: LocationStrategy, useClass: HashLocationStrategy},
      {provide: ErrorHandler, useClass: AplicationErrorHandle}],
  bootstrap: [AppComponent]
})
export class AppModule { }
