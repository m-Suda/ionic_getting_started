import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from "../home/home";

@IonicPage()
@Component({
    selector: 'page-top',
    templateUrl: 'top.html',
})
export class TopPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    goToHomePage(): void {
        this.navCtrl.setRoot(HomePage);
    }

}
