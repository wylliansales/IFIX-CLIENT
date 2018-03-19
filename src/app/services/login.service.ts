import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import {URL_API} from '../app.api';
import {Token} from '../security/login/token.model';
import {Client} from '../security/login/client.model';
import {Router} from '@angular/router';
import {User} from '../users/user.model';
import {UsersService} from './users.service';

@Injectable()
export class LoginService{

    user: User
    token: Token
    client: Client = {
        grant_type: 'password',
        client_id: 6,  //4,
        client_secret: 'mvjb51SDVuqbw5azGDIdfpCHmuWBPOYa3x3lax86', //'8Jws2iKBgsk9Jhrvqj0scsZW4RTIPULmH29CIwNT',
        username: '',
        password: ''
    }

    constructor(private http: HttpClient,
                private router: Router,
                private userService: UsersService){}

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