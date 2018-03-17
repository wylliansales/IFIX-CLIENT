import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Department} from '../department.model';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html'
})
export class DepartmentsListComponent implements OnInit {

    @Input() departments: Department[];
    @Output() delete = new EventEmitter<Department>();
    @Output() edit = new EventEmitter<Department>();


    constructor() {
    }

    ngOnInit() {
    }

    emitDelete(department: Department) {
        this.delete.emit(department);
    }

    emitEdit(department: Department) {
        this.edit.emit(department);
    }

}
