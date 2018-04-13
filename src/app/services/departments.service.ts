import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {URL_API} from '../app.api';
import {Department} from '../departments/department.model';
import {Sector} from '../sectors/sector.model';


@Injectable()
export class DepartmentsService{

    constructor(private http: HttpClient){}


    getDepartment(pag?: number): Observable<Department[]>{
        let params: HttpParams = undefined
        if(pag){
            params = new HttpParams().set('page', pag.toString())
        }
        return this.http.get<Department[]>(`${URL_API}/departments`, {params: params})
    }

    addDepartment(departament: Department): Observable<any>{
        return this.http.post<any>(`${URL_API}/departments`, departament)
    }

    getDepartmentById(id: number): Observable<Department>{
        return this.http.get<Department>(`${URL_API}/departments/${id}`)
    }

    searchDepartments(term: any): Observable<Department[]>{
        return this.http.get<Department[]>(`${URL_API}/departments?search=${term}`)
    }

    deleteDepartment(department: Department | number): Observable<Department> {
        const id = typeof department === 'number' ? department : department.id;
        return this.http.delete<Department>(`${URL_API}/departments/${id}`)
    }

    updateDepartment(department: Department, id: number): Observable<Department>{
        return this.http.put<Department>(`${URL_API}/departments/${id}`, department)
    }
}
