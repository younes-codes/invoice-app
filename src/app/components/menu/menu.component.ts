import {Component, OnInit} from '@angular/core';
import {CREATE_INVOICE, DASHBOARD, MY_DATA, SEE_INVOICES} from "../../app.routes-name";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    dashboard = DASHBOARD;
    createInvoice = CREATE_INVOICE;
    seeInvoices = SEE_INVOICES;
    myData = MY_DATA;

    constructor() {
    }

    ngOnInit(): void {
    }

}
