import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Invoice, InvoicesServices} from "../../services/invoices.services";
import {Client, ClientServices} from "../../services/client.services";
import {ThemePalette} from "@angular/material/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-invoice-details',
    templateUrl: './invoice-details.component.html',
    styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {

    @Input() id: string;
    @Input() index: number;
    @Output() close = new EventEmitter<void>();
    invoices: Invoice[] = [];
    invoice: Invoice;
    client: Client;
    color: ThemePalette = 'primary';
    formGroup: FormGroup;
    confirmedPayment: boolean;
    confirmedInvoice: boolean;


    ngOnInit(): void {
        this.client = this.clientServices.getClient();

        this.invoices = this.invoicesServices.invoices.value;
        this.invoice = this.invoices.find(i => i._id === this.id)!;
        this.confirmedPayment = this.invoice.paid;
        this.confirmedInvoice = this.invoice.confirmed;
    }


    constructor(private route: ActivatedRoute,
                private clientServices: ClientServices,
                private http: HttpClient,
                private invoicesServices: InvoicesServices,
                private router: Router,
                formBuilder: FormBuilder,
    ) {
        this.formGroup = formBuilder.group({
            confirmedPayment: false,
            confirmedInvoice: false,
        });
    }

    onClose() {
        this.close.emit();
    }

    onFormSubmit() {
        if (this.formGroup.value.confirmedPayment) {
            this.formGroup.value.confirmedInvoice = true;
            this.confirmedInvoice = true;
        }
        this.http.post(`${environment.urlAPI}/invoice/paid-invoice`, {
            invoicePaid: this.formGroup.value.confirmedPayment,
            invoiceConfirmed: this.formGroup.value.confirmedInvoice,
            invoiceId: this.invoice._id,
        }).subscribe((res: any) => {
            this.invoice = res.invoice;
            const updatedInvoice = this.invoices.find(invoice => invoice._id === this.invoice._id)!;
            updatedInvoice.paid = this.invoice.paid;
            updatedInvoice.confirmed = this.invoice.confirmed;
            this.onClose();
        });
    }
}
