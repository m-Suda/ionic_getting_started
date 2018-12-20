import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from "@ionic-native/in-app-browser";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TopPage } from "../pages/top/top";
import { WebviewPage } from "../pages/webview/webview";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        TopPage,
        WebviewPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        ReactiveFormsModule
    ],
    bootstrap: [ IonicApp ],
    entryComponents: [
        MyApp,
        HomePage,
        TopPage,
        WebviewPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        InAppBrowser
    ]
})
export class AppModule {
}
