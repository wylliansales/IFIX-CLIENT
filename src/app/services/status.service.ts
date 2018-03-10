import {Injectable} from '@angular/core'; 
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

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

    addStatus(status: Status): Observable<any>{
        return this.http.post<any>(`${URL_API}/status`, status)
    }

    getStatusById(search: string){

    }

    deleteStatus(status: Status | number): Observable<Status> {
        const id = typeof status === 'number' ? status : status.id;
        return this.http.delete<Status>(`${URL_API}/status/${id}`);
    }

}