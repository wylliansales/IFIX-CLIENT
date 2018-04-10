import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Sector} from '../sector.model';
import {SectorsService} from '../../services/sectors.service';
import {NotificationsService} from '../../services/notifications.service';
import {Status} from '../../status/status.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sectors-form',
  templateUrl: './sectors-form.component.html'
})
export class SectorsFormComponent implements OnInit {

    sectorForm: FormGroup
    sectors: Sector
    id: number

  constructor(private fb: FormBuilder,
              private sectorsService: SectorsService,
              private notificationsService: NotificationsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
        this.sectorForm = this.fb.group({
            name: this.fb.control('',[Validators.required]),
            description: this.fb.control('',[Validators.required])
        })
      this.id = parseInt(atob(this.activatedRoute.snapshot.params['id'])) || undefined
      this.getSector(this.id)
  }

    addSector(sector: Sector) {
        if(this.id){
            this.sectorsService.updateSector(sector, this.id)
                .subscribe((response) => {
                    if(response['error']){
                        console.log(response['error_description'])
                    } else {
                        this.notificationsService.showNotification(`Setor ${response['data'].name} atualizado com sucesso!`, 'success')
                    }
                })
        } else {
            this.sectorsService.addSector(sector)
                .subscribe((response) => {
                    if(response['error']){
                        console.log(response['error_description'])
                    } else {
                        this.notificationsService.showNotification(`Setor ${response['data'].name} cadastrado com sucesso!`, 'success')
                    }
                })
        }


        this.sectorForm.reset()
    }

    getSector(id: number) {
        if(id){
            this.sectorsService.getSectorById(id).subscribe(response => {
                this.sectorForm.setValue({
                    name: response['data'].name,
                    description: response['data'].description
                })
            })
        }
    }

}
