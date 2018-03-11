import { Component, OnInit } from '@angular/core';

import {SectorsService} from '../services/sectors.service';
import {NotificationsService} from '../services/notifications.service';

import {Sector} from './sector.model';


@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {

    sectors: Sector[]
    meta: any
    back: number = 1
    next: number = 2

  constructor(private sectorsService: SectorsService,
              private notificationsService: NotificationsService) { }

  ngOnInit() {
      this.sectorsService.getSector().subscribe(
          response => {
              this.sectors = response['data'];
              this.meta = response['meta'];
          }
      );
  }

    delete(sector: Sector) {
        this.sectors = this.sectors.filter(s => s !== sector);
        this.meta.total--;
        this.sectorsService.deleteSector(sector).subscribe(response =>
            this.notificationsService.showNotification(`${sector.name} excluído`, 'success')
        );
    }

    edit(sectors: Sector) {
        console.log(`edit #{status.name}`)
    }

    backPage(pag: number): void{
        if (this.back > 1) {
            this.back--;
            this.next--;
        }
        this.sectorsService.getSector(pag).subscribe(
            response => {
                this.sectors = response['data'];
                this.meta = response['meta'];
            }
        );
    }

    nextPag(pag: number): void{
        if (this.next < this.meta.last_page)
            this.back++
        this.next++
        this.sectorsService.getSector(pag).subscribe(
            response => {
                this.sectors = response['data'];
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
