import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

import {NotificationsService} from '../services/notifications.service';
import {EquipmentsService} from '../services/equipments.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import {Observable} from 'rxjs/Observable';

import {Equipment} from './equipment.model';


@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

    equipments: Equipment[]
    meta: Meta
    back: number = 1
    next: number = 2
    searchForm: FormGroup
    searchEquipment: FormControl

    constructor(private equipmentsService: EquipmentsService,
                private notificationsService: NotificationsService,
                private fb: FormBuilder) { }

    ngOnInit() {
        this.searchEquipment = this.fb.control('');
        this.searchForm = this.fb.group({
            searchEquipment: this.searchEquipment
        })

        this.searchEquipment.valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap(searchTerm => this.equipmentsService.searchEquipment(searchTerm))
            .subscribe(equipment => this.equipments = equipment['data'])

        this.equipmentsService.getEquipment().subscribe(
            response => {
                this.equipments = response['data'];
                this.meta = response['meta'];
            }
        );
    }

    delete(equipment: Equipment) {
        this.equipments = this.equipments.filter(s => s !== equipment);
        this.meta.total--;
        this.equipmentsService.deleteEquipment(equipment).subscribe(response =>
            this.notificationsService.showNotification(`${equipment.description} excluído`, 'success')
        );

    }

    edit(equipments: Equipment) {
        console.log(`edit #{status.name}`)
    }

    backPage(pag: number): void{
        if (this.back > 1) {
            this.back--;
            this.next--;
        }
        this.equipmentsService.getEquipment(pag).subscribe(
            response => {
                this.equipments = response['data'];
                this.meta = response['meta'];
            }
        );
    }

    nextPag(pag: number): void{
        if (this.next < this.meta.last_page)
            this.back++
        this.next++
        this.equipmentsService.getEquipment(pag).subscribe(
            response => {
                this.equipments = response['data'];
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