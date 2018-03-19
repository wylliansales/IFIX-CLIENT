import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-attendants-form-list',
    templateUrl: './attendants-form-list.component.html',
    styleUrls: ['./attendants-form-list.component.css']
})
export class AttendantsFormListComponent implements OnInit {

    searchForm: FormGroup

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.searchForm = this.fb.group({
                search: this.fb.control('')
            })
    }

}
