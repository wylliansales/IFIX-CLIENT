import {Component, Input, OnInit, Output} from '@angular/core';
import {RequestItem} from '../request-item.model';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.css']
})
export class RequestsListComponent implements OnInit {

    @Input() requestItems: RequestItem[];
    @Output() meet = new EventEmitter<RequestItem>();
    @Output() detail = new EventEmitter<RequestItem>();

    constructor() {
    }

    ngOnInit() {
    }

    getClick() {
        alert('Clicou');
    }

    emitMeet(request: RequestItem) {
        this.meet.emit(request)
    }

    detailRequest(request: RequestItem){
        this.detail.emit(request);
    }
}
