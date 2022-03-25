import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthServices {
    isAuth = new BehaviorSubject<boolean>(false);
    userId = new BehaviorSubject<string>('');

    getUserId = (): string => {
        const userId = localStorage.getItem('userId');

        if (userId) {
            this.userId.next(userId);
            return this.userId.value;
        }
        return '';
    }
}
