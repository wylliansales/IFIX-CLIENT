import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {URL_API} from '../app.api';
import {RequestItem} from '../requests/request-item.model';
import {Request} from '../request-detail/request.model';


@Injectable()
export class RequestsService {

    constructor(private http: HttpClient) {
    }

    getNewRequests(): Observable<RequestItem[]> {
        return this.http.get<RequestItem[]>(`${URL_API}/requests/news`);
    }

    getOpenRequests(): Observable<RequestItem[]> {
    return this.http.get<RequestItem[]>(`${URL_API}/requests/open`);
    }

    getClosedReqquest(): Observable<RequestItem[]> {
        return this.http.get<RequestItem[]>(`${URL_API}/requests/closed`);
    }

    meetRequest(request: RequestItem): Observable<RequestItem[]> {
        return this.http.put<RequestItem[]>(`${URL_API}/requests/meet/${request.id}`, request);
    }

    requestById(id: string): Observable<Request>{
        return this.http.get<Request>(`${URL_API}/requests/${id}`)
    }

    finalizeRequest(request: Request){
       const id: number = request.id
       request = undefined;
        return this.http.put<Request>(`${URL_API}/requests/finalize/${id}`, request)
    }

    myRequests(): Observable<RequestItem>{
        return this.http.get<RequestItem>(`${URL_API}/attendants/my-requests`)
    }
}