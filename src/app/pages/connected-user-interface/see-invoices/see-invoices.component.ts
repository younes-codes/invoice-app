import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {AuthServices} from "../../auth/auth.services";
import {Router} from "@angular/router";
import {Invoice, InvoicesServices} from "../../../services/invoices.services";
import {
    InvoiceDetailsComponent
} from "../../../components/invoice-details/invoice-details.component";
import {PlaceholderDirective} from "../../../shared/placeholder/placeholder.directive";
import {Subscription} from "rxjs";


@Component({
    selector: 'app-see-invoices',
    templateUrl: './see-invoices.component.html',
    styleUrls: ['./see-invoices.component.scss'],
    host: {
        'class': 'standard-page connected'
    }
})
export class SeeInvoicesComponent implements OnInit {
    invoices: Invoice[] = [];
    isLoading = true;
    isDetailsInvoiceOpen = false;
    @ViewChild(PlaceholderDirective) invoiceDetails: PlaceholderDirective;
    private closeInvoiceComp$: Subscription;

    constructor(
        private http: HttpClient,
        private route: Router,
        private componentFacResolver: ComponentFactoryResolver,
        private invoicesServices: InvoicesServices,
        private authServices: AuthServices) {
    }

    ngOnInit(): void {
        this.isDetailsInvoiceOpen = false;
        const userId = this.authServices.getUserId();
        this.http.get(`${environment.urlAPI}/invoice/get-invoices/${userId}`)
            .subscribe((invoicesData: any) => {
                this.invoices = invoicesData.invoices;
                this.invoicesServices.invoices.next(this.invoices);
                this.isLoading = false;
            }, error => {
                console.log(error);
                this.isLoading = false;
            })
    }

    removeAllInvoices($event: boolean) {
        this.isDetailsInvoiceOpen = $event;
    }

    showInvoice(id: string, index: number) {
        const invoiceDetailsComp = this.componentFacResolver.resolveComponentFactory(InvoiceDetailsComponent);
        const hostViewContainer = this.invoiceDetails.viewContainer;
        hostViewContainer.clear();
        const componentRef = hostViewContainer.createComponent(invoiceDetailsComp);
        componentRef.instance.id = id;
        componentRef.instance.index = index;
        this.closeInvoiceComp$ = componentRef.instance.close.subscribe(() => {
            this.closeInvoiceComp$.unsubscribe();
            hostViewContainer.clear();
        })
    }
}
