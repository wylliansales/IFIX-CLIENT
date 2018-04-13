import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {URL_API} from '../app.api';
import {Attendant} from '../attendants/attendant.model';


@Injectable()
export class AttendantsService{

    constructor(private http: HttpClient){}

    getAttendant(pag?: number): Observable<Attendant[]>{
        let params: HttpParams = undefined
        if(pag){
            params = new HttpParams().set('page', pag.toString())
        }
        return this.http.get<Attendant[]>(`${URL_API}/attendants`, {params: params})
    }

    addAttendant(attendant: Attendant): Observable<any>{
        return this.http.post<any>(`${URL_API}/attendants`, attendant)
    }

  searchAttendant(term: any): Observable<Attendant[]>{
        return this.http.get<Attendant[]>(`${URL_API}/attendants?search=${term}`)
  }

    getAttendantById(search: string){

    }

    deleteAttendant(attendant: Attendant | number): Observable<Attendant> {
        const id = typeof attendant === 'number' ? attendant : attendant.id;
        return this.http.delete<Attendant>(`${URL_API}/attendants/${id}`)
    }
}
