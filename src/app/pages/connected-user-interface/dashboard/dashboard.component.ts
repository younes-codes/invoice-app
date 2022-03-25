import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Client, ClientServices} from "../../../services/client.services";
import {AuthServices} from "../../auth/auth.services";
import {Invoice} from "../../../services/invoices.services";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    host: {
        'class': 'standard-page connected'
    }
})
export class DashboardComponent implements OnInit {
    invoices: Invoice[] = [];
    totalDaysWorked: number;
    totalCA: number = 0;
    totalCAUnpaid: number = 0;
    isCAHidden = false;
    client: Client;
    clientName: string;
    isLoading = true;

    constructor(
        private http: HttpClient,
        private authServices: AuthServices,
        private clientServices: ClientServices
    ) {
    }

    ngOnInit(): void {
        const userId = this.authServices.getUserId();
        this.http
            .get(`${environment.urlAPI}/invoice/get-invoices/${userId}`)
            .subscribe((invoicesData: any) => {
                this.invoices = invoicesData.invoices;
                this.totalDaysWorked = this.getTotalDaysWorked(this.invoices);
                this.totalCA = this.getTotalCA(this.invoices);
                this.totalCAUnpaid = this.getTotalCAUnpaid(this.invoices);
                this.client = this.clientServices.getClient();
                this.clientName = this.client.clientName;
                this.isLoading = false;
            }, error => {
                this.isLoading = false;
            })
    }

    private getTotalDaysWorked = (invoices: Invoice[]): number =>
        invoices.reduce((a, b) => a + (b.daysWorked || 0), 0);

    private getTotalCA = (invoices: Invoice[]): number => {
        const paidInvoices = invoices.filter(i => i.paid);
        return paidInvoices.reduce((a, b) => a + (b.daysWorked * b.tjm || 0), 0);
    }

    private getTotalCAUnpaid = (invoices: Invoice[]): number => {
        const unpaidInvoices = invoices.filter(i => !i.paid);
        return unpaidInvoices.reduce((a, b) => a + (b.daysWorked * b.tjm || 0), 0);
    }

    toggleVisibilityCA(): void {
        this.isCAHidden = !this.isCAHidden;
    }

    formatLabel(value: number) {
        if (value >= 1000) {
            return (value / 1000).toFixed(2) + ' <strong>k</strong> €';
        }

        return value;
    }
}
