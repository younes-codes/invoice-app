import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-client-data',
  templateUrl: './my-client-data.component.html',
  styleUrls: ['./my-client-data.component.scss'],
  host: {
    'class': 'standard-page connected'
  }
})
export class MyClientDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
