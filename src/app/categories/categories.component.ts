import { Component, OnInit } from '@angular/core';

import {NotificationsService} from '../services/notifications.service';
import {Category} from './category.model';
import {CategoriesService} from '../services/categories.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

    categories: Category[]
    meta: Meta
    back: number = 1
    next: number = 2

    constructor(private categoriesService: CategoriesService,
                private notificationsService: NotificationsService,
                private router: Router) { }

    ngOnInit() {
        this.categoriesService.getCategory().subscribe(
            response => {
                this.categories = response['data'];
                this.meta = response['meta'];
            }
        );
    }

    delete(category: Category) {
        this.categories = this.categories.filter(d => d !== category)
        this.meta.total--;
        this.categoriesService.deleteCategory(category).subscribe(response => {
            this.notificationsService.showNotification(`${category.name} excluído`, 'success')
        });
    }

    edit(category: Category) {
        this.router.navigate([`/categories/edit/${btoa(category.id.toString())}`])
    }

    backPage(pag: number): void{
        if (this.back > 1) {
            this.back--;
            this.next--;
        }
        this.categoriesService.getCategory(pag).subscribe(
            response => {
                this.categories = response['data'];
                this.meta = response['meta'];
            }
        );
    }

    nextPag(pag: number): void{
        if (this.next < this.meta.last_page)
            this.back++
        this.next++
        this.categoriesService.getCategory(pag).subscribe(
            response => {
                this.categories = response['data'];
                this.meta = response['meta'];
            }
        )
    }


}


class Meta {
    current_page: number
    from: number
    last_page: number
    total: number
}