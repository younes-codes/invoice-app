import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-my-data',
    templateUrl: './my-data.component.html',
    styleUrls: ['./my-data.component.scss'],
    host: {
        'class': 'standard-page connected'
    }
})
export class MyDataComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
