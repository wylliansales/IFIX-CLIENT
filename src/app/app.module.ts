import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app-routing';

import { AppComponent } from './app.component';
import { RequestsComponent } from './requests/requests.component';
import { LoginComponent } from './security/login/login.component';

import { ComponentsModule } from './components/components.module';
import {CoreModule} from './core/core.module';
import {httpInterceptorsProviders} from './http-interceptors/interceptors';
import { RequestsListComponent } from './requests/requests-list/requests-list.component';



@NgModule({
  declarations: [
    AppComponent,
    RequestsComponent,
    LoginComponent,
    RequestsListComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [httpInterceptorsProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
