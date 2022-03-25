import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CREATE_COMPANY} from "../../app.routes-name";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AuthServices} from "./auth.services";


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    host: {
        'class': 'standard-page'
    }
})
export class AuthComponent implements OnInit {

    constructor(private router: Router, private http: HttpClient, private authServices: AuthServices) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        this.http.post(`${environment.urlAPI}/user/create-user`, {
            email,
            password
        }).subscribe((res: any) => {
            this.authServices.userId.next(res.userId);
            return this.router.navigate([CREATE_COMPANY]);
        })
    }

}
