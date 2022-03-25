import {Component, HostListener, OnInit} from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    showInstallButton: boolean;
    private deferredPrompt: any;

    @HostListener('window:beforeinstallprompt', ['$event'])
    onBeforeinstallprompt(ev: any) {

        ev.preventDefault();

        this.showInstallButton = true;

        this.deferredPrompt = ev;
    }

    installApp() {
        this.deferredPrompt.prompt();
        // @ts-ignore
        this.deferredPrompt.userChoice
            // @ts-ignore
            .then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    this.showInstallButton = false;
                } else {
                    this.showInstallButton = false;
                }
                this.deferredPrompt = null;
            });

    }

    constructor() {
    }

    ngOnInit() {
    }

}
