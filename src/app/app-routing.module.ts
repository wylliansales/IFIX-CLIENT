import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestsComponent } from './requests/requests.component';

const routes: Routes = [
  {path:'painel', component: RequestsComponent},
  {path: '', redirectTo: 'painel', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
