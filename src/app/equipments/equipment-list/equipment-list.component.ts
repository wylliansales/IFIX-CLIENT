import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Equipment} from '../equipment.model';
import {Sector} from '../../sectors/sector.model';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {

    @Input() equipments: Equipment;
    @Output() delete = new EventEmitter<Equipment>();
    @Output() edit = new EventEmitter<Equipment>();

  constructor() { }

  ngOnInit() {
  }

    emitDelete(equipment: Equipment) {
        this.delete.emit(equipment);
    }

    emitEdit(equipment: Equipment) {
        this.edit.emit(equipment);
    }

}
