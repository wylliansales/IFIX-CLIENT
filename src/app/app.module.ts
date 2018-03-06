import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app-routing';

import { AppComponent } from './app.component';
import { RequestsComponent } from './requests/requests.component';
import { LoginComponent } from './security/login/login.component';

import { ComponentsModule } from './components/components.module';
import {CoreModule} from './core/core.module';
import {TokenInterceptor} from './http-interceptors/token-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    RequestsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
