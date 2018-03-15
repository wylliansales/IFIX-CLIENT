import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {URL_API} from '../app.api';
import {Department} from '../departaments/department.model';


@Injectable()
export class DepartamentsService{

    constructor(private http: HttpClient){}


    getDepartament(pag?: number): Observable<Department[]>{
        let params: HttpParams = undefined
        if(pag){
            params = new HttpParams().set('page', pag.toString())
        }
        return this.http.get<Department[]>(`${URL_API}/departaments`, {params: params})
    }

    addDepartament(departament: Department): Observable<any>{
        return this.http.post<any>(`${URL_API}/departaments`, departament)
    }

    getStatusById(search: string){

    }

    deleteDepartament(departament: Department | number): Observable<Department> {
        const id = typeof departament === 'number' ? departament : departament.id;
        return this.http.delete<Department>(`${URL_API}/departaments/${id}`)
    }
}