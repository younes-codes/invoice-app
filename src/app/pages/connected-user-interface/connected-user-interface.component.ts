import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {routeTransitionAnimations} from "./route-transition-animation";


@Component({
    selector: 'app-connected-user-interface',
    templateUrl: './connected-user-interface.component.html',
    styleUrls: ['./connected-user-interface.component.scss'],
    animations: [routeTransitionAnimations]
})
export class ConnectedUserInterfaceComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet &&
            outlet.activatedRouteData &&
            outlet.activatedRouteData['animationState'];
    }

}
