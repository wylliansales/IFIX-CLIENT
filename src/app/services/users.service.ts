import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../users/user.model';
import {URL_API} from '../app.api';
import {DEFAULT_PACKAGE_URL_PROVIDER} from '@angular/platform-browser-dynamic/src/compiler_factory';


@Injectable()
export class UsersService {
    constructor(private http: HttpClient) {
    }


    getUsers() {
    }

    getUsersBlocked(): Observable<User[]> {
        return this.http.get<User[]>(`${URL_API}/users/blocked`);
    }

    getUsersReleased(): Observable<User[]> {
        return this.http.get<User[]>(`${URL_API}/users/released`);
    }

    searchUser(term: any): Observable<User[]>{
        return this.http.get<User[]>(`${URL_API}/users?search=${term}`)
    }

    releaseUser(user: User): Observable<any>{
        return this.http.put(`${URL_API}/users/release/${user.id}`, user);
    }

    blokedUser(user: User): Observable<any>{
        return this.http.put(`${URL_API}/users/block/${user.id}`, user);
    }

    getUserLogin(): Observable<User>{
        return this.http.get<User>(`${URL_API}/users/user/login`);
    }

}
