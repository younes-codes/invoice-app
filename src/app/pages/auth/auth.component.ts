import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CREATE_COMPANY} from "../../app.routes-name";
import {NgForm} from "@angular/forms";


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    host: {
        'class': 'standard-page'
    }
})
export class AuthComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
        return this.router.navigate([CREATE_COMPANY]);
    }

}
