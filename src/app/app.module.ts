import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app-routing';

import { AppComponent } from './app.component';
import { RequestsComponent } from './requests/requests.component';
import { LoginComponent } from './security/login/login.component';

import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    AppComponent,
    RequestsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
