import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {URL_API} from '../app.api';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StatusService{

    constructor(private http: HttpClient){}


    getStatus(): Observable<any>{
        return this.http.get<any>('https://192.168.10.10/api/login')
    }
}