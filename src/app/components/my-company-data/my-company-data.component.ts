import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-company-data',
  templateUrl: './my-company-data.component.html',
  styleUrls: ['./my-company-data.component.scss'],
  host: {
    'class': 'standard-page connected'
  }
})
export class MyCompanyDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
