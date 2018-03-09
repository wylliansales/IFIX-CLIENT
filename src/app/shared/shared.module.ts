import {NgModule} from '@angular/core';
import {InputComponent} from './input/input.component';
import {RadioComponent} from './radio/radio.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [InputComponent, RadioComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, CommonModule, ReactiveFormsModule]
})

export class SharedModule{}
