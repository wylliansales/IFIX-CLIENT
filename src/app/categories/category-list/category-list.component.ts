import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../category.model';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

    @Input() categories: Category[];
    @Output() delete = new EventEmitter<Category>();
    @Output() edit = new EventEmitter<Category>();


    constructor() {
    }

    ngOnInit() {
    }

    emitDelete(department: Category) {
        this.delete.emit(department);
    }

    emitEdit(department: Category) {
        this.edit.emit(department);
    }
}
