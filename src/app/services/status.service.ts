import {Injectable} from '@angular/core'; 
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import {URL_API} from '../app.api';
import {Status} from '../status/status.model';

@Injectable()
export class StatusService{

    constructor(private http: HttpClient){}

    getStatus(pag?: number): Observable<Status[]>{
        let params: HttpParams = undefined
        if(pag){
            params = new HttpParams().set('page', pag.toString())
        }
        return this.http.get<Status[]>(`${URL_API}/status`, {params: params})
    }

    addStatus(status: Status): Observable<Status>{
        return this.http.post<Status>(`${URL_API}/status`, status)
    }

    getStatusById(id: number){

    }

}