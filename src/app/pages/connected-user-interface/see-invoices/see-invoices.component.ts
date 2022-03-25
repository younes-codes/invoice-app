import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-see-invoices',
    templateUrl: './see-invoices.component.html',
    styleUrls: ['./see-invoices.component.scss'],
    host: {
        'class': 'standard-page connected'
    }
})
export class SeeInvoicesComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
