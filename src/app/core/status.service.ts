import {Injectable} from '@angular/core'; 
import {HttpClient} from '@angular/common/http';



import {URL_API} from '../app.api';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StatusService{

    constructor(private http: HttpClient){}
    
    getStatus(){
        return this.http.get('http://192.168.10.10/api/attendants')
    } 
}