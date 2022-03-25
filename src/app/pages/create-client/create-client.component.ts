import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {CONNECTED_USER_INTERFACE, DASHBOARD} from "../../app.routes-name";
import {AuthServices} from "../auth/auth.services";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ClientServices} from "../../services/client.services";

@Component({
    selector: 'app-create-client',
    templateUrl: './create-client.component.html',
    styleUrls: ['./create-client.component.scss'],
    host: {
        'class': 'standard-page'
    }
})
export class CreateClientComponent implements OnInit {

    constructor(
        private router: Router,
        private http: HttpClient,
        private clientServices: ClientServices,
        private authServices: AuthServices
    ) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        const userId = this.authServices.userId.value;
        const clientName = form.value.clientName;
        const tjm = form.value.tjm;
        this.http.post(`${environment.urlAPI}/client/create-client/${userId}`, {
            clientName,
            tjm
        }).subscribe((res: any) => {
            localStorage.setItem('userId', userId);
            this.clientServices.client.next({
                clientName: res.client.clientName,
                tjm: res.client.tjm
            });
            localStorage.setItem('client', JSON.stringify(this.clientServices.client.value));
            return this.router.navigate([`${CONNECTED_USER_INTERFACE}/${DASHBOARD}`])
        });
    }
}
