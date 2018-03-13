import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {EquipmentsService} from '../../services/equipments.service';
import {NotificationsService} from '../../services/notifications.service';
import {Equipment} from '../equipment.model';
import {Category} from '../../categories/category.model';
import {CategoriesService} from '../../services/categories.service';
import {Sector} from '../../sectors/sector.model';
import {SectorsService} from '../../services/sectors.service';


@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.css']
})
export class EquipmentFormComponent implements OnInit {

    equipmentForm: FormGroup
    equipments: Equipment
    categories: Category[]
    sectors: Sector[]

    constructor(private fb: FormBuilder,
                private equipmentsService: EquipmentsService,
                private notificationsService: NotificationsService,
                private categoriesServices: CategoriesService,
                private sectorsServices: SectorsService) { }

    ngOnInit() {
        this.equipmentForm = this.fb.group({
            code: this.fb.control('',[Validators.required]),
            category_id: this.fb.control('',[Validators.required]),
            description: this.fb.control('',[Validators.required]),
            sector_id: this.fb.control('',[Validators.required])
        })
        this.categoriesServices.getCategory().subscribe( response => this.categories = response['data'])
       this.sectorsServices.getSector().subscribe( response => this.sectors = response['data'])

    }

    addEquipment(equipment: Equipment) {
        this.equipmentsService.addEquipment(equipment)
            .subscribe((response) => {
                if(response.error){
                    console.log(response.error_description)
                } else {
                    this.notificationsService.showNotification(`Equipamento ${response['data'].code} cadastrado com sucesso!`, 'success')
                }
            })

        this.equipmentForm.reset()
    }

}