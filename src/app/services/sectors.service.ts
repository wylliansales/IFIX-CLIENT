import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {URL_API} from '../app.api';

import {Sector} from '../sectors/sector.model';

@Injectable()
export class SectorsService{

    constructor(private http: HttpClient){}


    getSector(pag?: number): Observable<Sector[]>{
        let params: HttpParams = undefined
        if(pag){
            params = new HttpParams().set('page', pag.toString())
        }
        return this.http.get<Sector[]>(`${URL_API}/sectors`, {params: params})
    }

    addSector(sector: Sector): Observable<any>{
        return this.http.post<any>(`${URL_API}/sectors`, sector)
    }

    getStatusById(search: string){

    }

    deleteSector(sector: Sector | number): Observable<Sector> {
        const id = typeof sector === 'number' ? sector : sector.id;
        return this.http.delete<Sector>(`${URL_API}/sectors/${id}`)
    }

    searchSector(value: any): Observable<Sector[]>{
        const term = value !== '' ? value : '%';
        return this.http.get<Sector[]>(`${URL_API}/sectors/search/${term}`)
    }
}