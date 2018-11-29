import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TopPage } from "../top/top";

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
}
