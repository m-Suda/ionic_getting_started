import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TopPage } from "../top/top";
import { WebviewPage } from "../webview/webview";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }

    logout(): void {
        this.navCtrl.setRoot(TopPage);
    }

    goToWebView(): void {
        this.navCtrl.push(WebviewPage);
    }
}
