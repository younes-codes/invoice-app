import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'app-confirm-invoice',
    templateUrl: './confirm-invoice.component.html',
    styleUrls: ['./confirm-invoice.component.scss'],
    host: {
        'class': 'standard-page'
    }
})
export class ConfirmInvoiceComponent implements OnInit {
    daysWorked: number;
    month: string;
    invoiceId: string;
    isLoading = true;
    isConfirmed = false;

    constructor(private route: ActivatedRoute, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.invoiceId = this.route.snapshot.params['invoiceId'];
        this.http.get(`${environment.urlAPI}/invoice/get-invoice/${this.invoiceId}`).subscribe((res: any) => {
                console.log(res);
                this.isConfirmed = res.invoice.confirmed;
                this.isLoading = false;
                this.month = res.month;
                this.daysWorked = res.invoice.daysWorked;
            },
            error => {
                console.log(error);
                this.isLoading = false;
            })
    }

    onSubmit(form: NgForm) {
        this.http.post(`${environment.urlAPI}/invoice/confirmed-invoice`, {
            invoiceId: this.invoiceId
        }).subscribe(() => {
            this.isConfirmed = true;
            console.log(this.isConfirmed)
        }, error => {
            console.log(error)
        });
    }
}
