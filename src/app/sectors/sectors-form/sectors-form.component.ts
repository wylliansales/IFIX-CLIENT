import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Sector} from '../sector.model';
import {SectorsService} from '../../services/sectors.service';
import {NotificationsService} from '../../services/notifications.service';
import {Status} from '../../status/status.model';

@Component({
  selector: 'app-sectors-form',
  templateUrl: './sectors-form.component.html'
})
export class SectorsFormComponent implements OnInit {

    sectorForm: FormGroup
    sectors: Sector

  constructor(private fb: FormBuilder,
              private sectorsService: SectorsService,
              private notificationsService: NotificationsService) { }

  ngOnInit() {
        this.sectorForm = this.fb.group({
            name: this.fb.control('',[Validators.required]),
            description: this.fb.control('',[Validators.required])
        })
  }

    addSector(sector: Sector) {
        this.sectorsService.addSector(sector)
            .subscribe((response) => {
                if(response.error){
                    console.log(response.error_description)
                } else {
                    this.notificationsService.showNotification(`Setor ${response['data'].name} cadastrado com sucesso!`, 'success')
                }
            })

        this.sectorForm.reset()
    }

}
