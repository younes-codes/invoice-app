import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

export interface Invoice {
    clientId: string;
    confirmed: boolean;
    daysWorked: number;
    paid: boolean;
    tjm: number
    userId: string;
    _id: string;
}


@Injectable({providedIn: 'root'})
export class InvoicesServices {
    invoices = new BehaviorSubject<Invoice[]>([]);
}
