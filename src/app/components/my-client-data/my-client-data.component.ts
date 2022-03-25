import {Component, OnInit} from '@angular/core';
import {Client, ClientServices} from "../../services/client.services";

@Component({
    selector: 'app-my-client-data',
    templateUrl: './my-client-data.component.html',
    styleUrls: ['./my-client-data.component.scss'],
    host: {
        'class': 'standard-page connected'
    }
})
export class MyClientDataComponent implements OnInit {
    client: Client;

    constructor(private clientServices: ClientServices) {
    }

    ngOnInit(): void {
        this.client = this.clientServices.getClient();
    }

}
