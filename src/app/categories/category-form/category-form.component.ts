import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {NotificationsService} from '../../services/notifications.service';
import {Category} from '../category.model';
import {CategoriesService} from '../../services/categories.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

    categoryForm: FormGroup
    categories: Category[]
    id: string

    constructor(private fb: FormBuilder,
                private categoriesService: CategoriesService,
                private notificationsService: NotificationsService,
                private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.categoryForm = this.fb.group({
            name: this.fb.control('',[Validators.required]),
            description: this.fb.control('',[Validators.required])
        })
        this.id = atob(this.activatedRoute.snapshot.params['id']) || undefined
        this.getCategory(this.id)
    }

    addCategory(category: Category) {
        if(this.id){
            this.categoriesService.updateCategory(category, this.id)
                .subscribe((response) => {
                    if(response.error){
                        console.log(response.error_description)
                    } else {
                        this.notificationsService.showNotification(`Categoria ${response['data'].name} atualizada com sucesso!`, 'success')
                    }
                })
        } else {
            this.categoriesService.addCategory(category)
                .subscribe((response) => {
                    if(response.error){
                        console.log(response.error_description)
                    } else {
                        this.notificationsService.showNotification(`Categoria ${response['data'].name} cadastrado com sucesso!`, 'success')
                    }
                })
        }


        this.categoryForm.reset()
    }

    getCategory(id: string){
        if(id){
            this.categoriesService.getCategoryById(id).subscribe(response => {
                this.categoryForm.setValue({
                    name: response['data'].name,
                    description: response['data'].description
                })
            })
        }
    }

}
