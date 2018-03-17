import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {NotificationsService} from '../../services/notifications.service';
import {Category} from '../category.model';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

    categoryForm: FormGroup
    categories: Category[]

    constructor(private fb: FormBuilder,
                private categoriesService: CategoriesService,
                private notificationsService: NotificationsService) { }

    ngOnInit() {
        this.categoryForm = this.fb.group({
            name: this.fb.control('',[Validators.required]),
            description: this.fb.control('',[Validators.required])
        })
    }

    addCategory(category: Category) {
        this.categoriesService.addCategory(category)
            .subscribe((response) => {
                if(response.error){
                    console.log(response.error_description)
                } else {
                    this.notificationsService.showNotification(`Categoria ${response['data'].name} cadastrado com sucesso!`, 'success')
                }
            })

        this.categoryForm.reset()
    }

}
