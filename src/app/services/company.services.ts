import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Client} from "./client.services";

export interface Company {
    companyName: string;
    street: string;
    postalCode: number;
    city: string;
    phone: number;
    siret: string;
    tva: string;
    iban: string;
    bic: string;
}

@Injectable({providedIn: 'root'})
export class CompanyServices {
    // @ts-ignore
    company = new BehaviorSubject<Company>(null);

    getCompany = (): Company => {
        const company = localStorage.getItem('company');
        if (company) {
            const parsedCompany = JSON.parse(company);
            this.company.next(parsedCompany);
            return this.company.value;
        }
        return this.company.value;
    }
}
