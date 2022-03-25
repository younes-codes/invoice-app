import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {routeTransitionAnimations} from "./route-transition-animation";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";


@Component({
    selector: 'app-connected-user-interface',
    templateUrl: './connected-user-interface.component.html',
    styleUrls: ['./connected-user-interface.component.scss'],
    animations: [routeTransitionAnimations]
})
export class ConnectedUserInterfaceComponent implements OnInit {
    isMobile: boolean;

    constructor(public breakpointObserver: BreakpointObserver) {
    }

    ngOnInit(): void {
        this.breakpointObserver
            .observe(['(min-width: 600px)'])
            .subscribe((state: BreakpointState) => {
                this.isMobile = !state.matches;
            });
    }

    prepareRoute(outlet: RouterOutlet) {
        return this.isMobile ? outlet &&
            outlet.activatedRouteData &&
            outlet.activatedRouteData['animationState'] : null;
    }

}
