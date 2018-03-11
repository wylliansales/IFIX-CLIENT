import { Component, OnInit } from '@angular/core';

import {NotificationsService} from '../services/notifications.service';
import {EquipmentsService} from '../services/equipments.service';

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

    constructor(private equipmentsService: EquipmentsService,
                private notificationsService: NotificationsService) { }

    ngOnInit() {
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