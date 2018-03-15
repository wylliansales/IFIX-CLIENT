import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import {URL_API} from '../app.api';
import {Token} from '../security/login/token.model';
import {Client} from '../security/login/client.model';
import {Router} from '@angular/router';
import {User} from '../users/user.model';

@Injectable()
export class LoginService{

    user: User
    token: Token
    client: Client = {
        grant_type: 'password',
        client_id: 3,
        client_secret: 'mGPTTM5F5QZFjzniouR4tWGwAKRK9Ui2FPVapHWw',
        username: '',
        password: ''
    }

    constructor(private http: HttpClient,
                private router: Router){}

    isLoggedIn(): boolean {
        return this.token !== undefined
    }

    login(email: string, password: string): Observable<Token> {
        this.client.username = email
        this.client.password = password
        return this.http.post<Token>(`${URL_API}/oauth/token`, this.client)
            .do( token => this.token = token)
    }

    handleLogin(path?: string){
        this.router.navigate(['/login', btoa(path)])
    }

    logout(){
        this.user = undefined
        this.token = undefined
        this.handleLogin('/');
    }
}