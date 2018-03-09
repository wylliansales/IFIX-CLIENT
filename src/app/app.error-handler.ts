import {HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ErrorHandler, Injectable, Injector, NgZone} from '@angular/core';

import {NotificationsService} from './services/notifications.service';

@Injectable()
export class AplicationErrorHandle extends ErrorHandler{

    constructor(private ns: NotificationsService,
                private injector: Injector,
                private zone: NgZone){
        super()
    }

    handleError(errorResponse: HttpErrorResponse | any) {
        if(errorResponse instanceof HttpErrorResponse) {
            const message = errorResponse.message

            this.zone.run(()=>{
                switch (errorResponse.status) {
                    case 400:
                        this.ns.showNotification(message, 'danger')
                        break;
                    case 401:
                        this.ns.showNotification('error 401 redirecionar ', 'danger')
                        break;
                    case 403:
                        this.ns.showNotification('Não autorizado', 'danger')
                        console.log(message)
                        break;
                    case 404:
                        this.ns.showNotification(message, 'info')
                        break;
                    case 405:
                        this.ns.showNotification('Não permitido.', 'danger')
                        break;
                    case 500:
                        this.ns.showNotification(message, 'danger')
                        break;
                    case 0:
                        this.ns.showNotification('Falha de conexão', 'danger')
                        break;
                }
            })
        }
    }
}