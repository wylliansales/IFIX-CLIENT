import {ModuleWithProviders, NgModule} from '@angular/core';
import {InputComponent} from './input/input.component';
import {RadioComponent} from './radio/radio.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { SelectComponent } from './select/select.component';
import {LoggedInGuard} from '../security/loggedin.guard';


@NgModule({
    declarations: [InputComponent, RadioComponent, SelectComponent, SelectComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, SelectComponent, CommonModule, ReactiveFormsModule]
})

export class SharedModule{
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [LoggedInGuard,
                /*{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}*/]
        }
    }
}
