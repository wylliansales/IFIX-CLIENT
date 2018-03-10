import {Component, OnInit, Input, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

import {Sector} from '../sector.model';

@Component({
    selector: 'app-sectors-list',
    templateUrl: './sectors-list.component.html',
    styleUrls: ['./sectors-list.component.css']
})
export class SectorsListComponent implements OnInit {

    @Input() sectors: Sector;
    @Output() delete = new EventEmitter<Sector>();
    @Output() edit = new EventEmitter<Sector>();

    constructor() {
    }

    ngOnInit() {
    }

    emitDelete(sector: Sector) {
        this.delete.emit(sector);
    }

    emitEdit(sector: Sector) {
        this.edit.emit(sector);
    }
}
