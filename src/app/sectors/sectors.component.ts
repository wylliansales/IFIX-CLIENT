import { Component, OnInit } from '@angular/core';

import {SectorsService} from '../services/sectors.service';
import {NotificationsService} from '../services/notifications.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {Observable} from 'rxjs/Observable';

import {Sector} from './sector.model';
import {Subject} from 'rxjs/Subject';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {

    sectors: Sector[]
    meta: any
    pag: number = 1
    back: number = 1
    next: number = 2
    private searchSector$ = new Subject<string>()

  constructor(private sectorsService: SectorsService,
              private notificationsService: NotificationsService,
              private router: Router) { }

  ngOnInit() {
      this.sectorsService.getSector().subscribe(
          response => {
              this.sectors = response['data'];
              this.meta = response['meta'];
          }
      );

      this.searchSector$
          .debounceTime(500)
          .distinctUntilChanged()
          .switchMap(term =>
              this.sectorsService.searchSector(term))
          .subscribe(sector => {
              this.sectors = sector['data']
          });
  }

    searchForm(value: string) {
        this.searchSector$.next(value)
    }

    delete(sector: Sector) {
        this.sectors = this.sectors.filter(s => s !== sector);
        this.meta.total--;
        this.sectorsService.deleteSector(sector).subscribe(response =>
            this.notificationsService.showNotification(`${sector.name} excluído`, 'success')
        );
    }

    edit(sector: Sector) {
        this.router.navigate([`/sectors/edit/${btoa(sector.id.toString())}`])
    }

    backPage(pag: number): void{
        if (this.back > 1) {
            this.back--;
            this.next--;
            this.pag--;
        }
        this.sectorsService.getSector(pag).subscribe(
            response => {
                this.sectors = response['data'];
                this.meta = response['meta'];
            }
        );
    }

    nextPag(pag: number): void{
        if (this.next < this.meta.last_page){
            this.back++
            this.next++
            this.pag++;
        }

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
