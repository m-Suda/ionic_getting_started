import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from "@ionic-native/in-app-browser";

@IonicPage()
@Component({
    selector: 'page-webview',
    templateUrl: 'webview.html',
})
export class WebviewPage implements OnInit {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private inAppBrowser: InAppBrowser) {
    }

    ngOnInit() {

        const url = 'https://frosty-masak-ead0f6.netlify.com/top';
        // const url = 'http://localhost:3000/';
        const target = '_blank';

        let browser = this.inAppBrowser.create(url, target, {location: 'yes',zoom: 'no', toolbar: 'no'});
        browser.on('loadstop').subscribe(event => {
            browser.executeScript({code: "document.innerHTML = '<h1>Hello World!</h1>'"});
        });
        browser.show();
    }
}
