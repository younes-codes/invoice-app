import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss'],
  host: {
    'class': 'standard-page connected'
  }
})
export class CreateInvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    onSubmit(form: NgForm) {

    }
}
