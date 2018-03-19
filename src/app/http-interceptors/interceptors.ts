import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {TokenInterceptor} from './token-interceptor';
import {NgProgressInterceptor} from 'ngx-progressbar';

export const httpInterceptorsProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true}
];
