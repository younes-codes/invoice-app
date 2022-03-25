import {Component, OnInit} from '@angular/core';
import {Company, CompanyServices} from "../../services/company.services";

@Component({
    selector: 'app-my-company-data',
    templateUrl: './my-company-data.component.html',
    styleUrls: ['./my-company-data.component.scss'],
    host: {
        'class': 'standard-page connected'
    }
})
export class MyCompanyDataComponent implements OnInit {
    company: Company;

    constructor(private companyServices: CompanyServices) {
    }

    ngOnInit(): void {
        this.company = this.companyServices.getCompany();
    }

}
