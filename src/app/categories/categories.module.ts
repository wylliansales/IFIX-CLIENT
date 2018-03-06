import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CategoriesComponent} from './categories.component';
import { CategoryComponent } from './category/category.component';

const ROUTES: Routes = [

]

@NgModule({
    declarations: [CategoriesComponent, CategoryComponent],
    imports: []
})
export class CategoriesModule{}