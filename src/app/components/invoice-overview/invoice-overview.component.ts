import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";


@Component({
    selector: 'app-invoice-overview',
    templateUrl: './invoice-overview.component.html',
    styleUrls: ['./invoice-overview.component.scss']
})
export class InvoiceOverviewComponent implements OnInit, OnDestroy {

    @Input() id: number;
    @Input() daysWorked: number;
    @Input() ca: number;
    @Input() tjm: number;
    @Input() invoiceId: string;
    @Input() isInvoiceConfirmed: boolean;
    @Input() isInvoicePaid: boolean;
    @Output() isDetailsInvoiceOpen = new EventEmitter<boolean>(false);
    @ViewChild('invoice') invoice: ElementRef;


    constructor(private http: HttpClient) {
    }

    ngOnDestroy(): void {
        this.isDetailsInvoiceOpen.emit(false);
    }

    ngOnInit(): void {
    }

    deleteInvoice($event: Event, invoiceId: string): void {
        $event.stopImmediatePropagation();
        this.http.delete(`${environment.urlAPI}/invoice/delete-invoice/${invoiceId}`)
            .subscribe(res => {
                this.invoice.nativeElement.style.transform = 'translateX(50px)';
                this.invoice.nativeElement.style.opacity = '0';
                setTimeout(() => {
                    this.invoice.nativeElement.style.display = 'none';
                }, 500)
            });
        this.isDetailsInvoiceOpen.emit(false);
    }
}
