import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {CREATE_CLIENT} from "../../app.routes-name";

@Component({
    selector: 'app-create-company',
    templateUrl: './create-company.component.html',
    styleUrls: ['./create-company.component.scss'],
    host: {
        'class': 'standard-page'
    }
})
export class CreateCompanyComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
        return this.router.navigate([CREATE_CLIENT]);
    }
}
