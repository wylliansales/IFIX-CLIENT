import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Attendant} from '../../attendants/attendant.model';

@Component({
  selector: 'app-attendants-list',
  templateUrl: './attendants-list.component.html',
  styleUrls: ['./attendants-list.component.css']
})
export class AttendantsListComponent implements OnInit {

    @Input() attendants: Attendant[];
    @Output() delete = new EventEmitter<Attendant>();
    @Output() edit = new EventEmitter<Attendant>();


    constructor() {
    }

    ngOnInit() {
    }

    emitDelete(department: Attendant) {
        this.delete.emit(department);
    }

    emitEdit(department: Attendant) {
        this.edit.emit(department);
    }
}