import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {CONNECTED_USER_INTERFACE, SEE_INVOICES} from "../../../app.routes-name";
import {environment} from "../../../../environments/environment";
import {AuthServices} from "../../auth/auth.services";
import {ClientServices} from "../../../services/client.services";

@Component({
    selector: 'app-create-invoice',
    templateUrl: './create-invoice.component.html',
    styleUrls: ['./create-invoice.component.scss'],
    host: {
        'class': 'standard-page connected'
    }
})
export class CreateInvoiceComponent implements OnInit {
    isDisabled = true;
    daysWorked: number;

    constructor(
        private http: HttpClient,
        private authServices: AuthServices,
        private clientService: ClientServices,
        private router: Router
    ) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        const daysWorked = +form.value.daysWorked;
        const tjm = this.clientService.getClient().tjm;
        const userId = this.authServices.getUserId();
        this.isDisabled = true;


        this.http.post(`${environment.urlAPI}/invoice/create-invoice/${userId}`, {
            daysWorked,
            tjm
        }).subscribe((res) => {
                return this.router.navigate([`${CONNECTED_USER_INTERFACE}/${SEE_INVOICES}`])
            },
            error => {
                this.isDisabled = false;
                console.log(error)
            });
    }


    modelChanged(value: number) {
        this.isDisabled = value <= 0;
    }
}
