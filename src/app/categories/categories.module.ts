import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CategoriesComponent} from './categories.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import {SharedModule} from '../shared/shared.module';
import {CategoryComponent} from './category/category.component';

const ROUTES: Routes = [
    {path: '', component: CategoriesComponent},
    {path: 'new', component: CategoryFormComponent}
]

@NgModule({
    declarations: [CategoriesComponent, CategoryFormComponent, CategoryListComponent, CategoryComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class CategoriesModule{}