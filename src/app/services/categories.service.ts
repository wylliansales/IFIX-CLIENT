import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {URL_API} from '../app.api';

import {Sector} from '../sectors/sector.model';
import {Category} from '../categories/category.model';

@Injectable()
export class CategoriesService{

    constructor(private http: HttpClient){}


    getCategory(pag?: number): Observable<Category[]>{
        let params: HttpParams = undefined
        if(pag){
            params = new HttpParams().set('page', pag.toString())
        }
        return this.http.get<Category[]>(`${URL_API}/categories`, {params: params})
    }

    addCategory(category: Category): Observable<any>{
        return this.http.post<any>(`${URL_API}/categories`, category)
    }

    getCategoryById(id: number): Observable<Category>{
        return this.http.get<Category>(`${URL_API}/categories/${id}`)
    }

    searchCategory(term: any): Observable<Category[]>{
      return this.http.get<Category[]>(`${URL_API}/categories?search=${term}`)
    }

    deleteCategory(category: Category | number): Observable<Category> {
        const id = typeof category === 'number' ? category : category.id;
        return this.http.delete<Category>(`${URL_API}/categories/${id}`)
    }

    updateCategory(category: Category, id: number): Observable<Category>{
        return this.http.put<Category>(`${URL_API}/categories/${id}`, category)
    }
}
