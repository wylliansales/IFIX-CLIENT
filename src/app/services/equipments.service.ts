import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {URL_API} from '../app.api';
import {Equipment} from '../equipments/equipment.model';



@Injectable()
export class EquipmentsService{

    constructor(private http: HttpClient){}


    getEquipment(pag?: number): Observable<Equipment[]>{
        let params: HttpParams = undefined
        if(pag){
            params = new HttpParams().set('page', pag.toString())
        }
        return this.http.get<Equipment[]>(`${URL_API}/equipments`, {params: params})
    }

    addEquipment(equipment: Equipment): Observable<any>{
        return this.http.post<any>(`${URL_API}/equipments`, equipment)
    }

    getEquipmntById(search: string){

    }

    deleteEquipment(equipment: Equipment | number): Observable<Equipment> {
        const id = typeof equipment === 'number' ? equipment : equipment.id;
        return this.http.delete<Equipment>(`${URL_API}/equipments/${id}`)
    }
}