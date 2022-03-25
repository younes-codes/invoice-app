import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {CONNECTED_USER_INTERFACE, DASHBOARD} from "../../app.routes-name";
import {AuthServices} from "../auth/auth.services";

@Component({
    selector: 'app-create-client',
    templateUrl: './create-client.component.html',
    styleUrls: ['./create-client.component.scss'],
    host: {
        'class': 'standard-page'
    }
})
export class CreateClientComponent implements OnInit {

    constructor(private router: Router, private authServices: AuthServices) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
        this.authServices.isAuth.next(true);
        this.router.navigate([`${CONNECTED_USER_INTERFACE}/${DASHBOARD}`]);
    }
}
