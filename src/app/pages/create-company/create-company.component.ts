import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {CREATE_CLIENT} from "../../app.routes-name";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AuthServices} from "../auth/auth.services";

@Component({
    selector: 'app-create-company',
    templateUrl: './create-company.component.html',
    styleUrls: ['./create-company.component.scss'],
    host: {
        'class': 'standard-page'
    }
})
export class CreateCompanyComponent implements OnInit {

    constructor(private router: Router, private http: HttpClient, private authServices: AuthServices) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        const data = form.value;
        const userId = this.authServices.userId.value;
        this.http.post(`${environment.urlAPI}/company/create-company/${userId}`, {data})
            .subscribe(() => {
                    localStorage.setItem('company', JSON.stringify(data));
                    return this.router.navigate([CREATE_CLIENT]);
                },
                error => {
                    console.log(error)
                })
    }
}
