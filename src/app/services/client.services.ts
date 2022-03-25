import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

export interface Client {
    clientName: string;
    tjm: number
}

@Injectable({providedIn: 'root'})
export class ClientServices {

    client = new BehaviorSubject({clientName: '', tjm: 0});

    getClient = (): Client => {
        const client = localStorage.getItem('client');
        if (client) {
            const parsedClient = JSON.parse(client);
            this.client.next(parsedClient);
            return this.client.value;
        }
        return this.client.value;
    }
}
