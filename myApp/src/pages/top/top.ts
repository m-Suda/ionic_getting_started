import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";


@IonicPage()
@Component({
    selector: 'page-top',
    templateUrl: 'top.html',
})
export class TopPage {

    userId = new FormControl('', [
        Validators.required,
        Validators.maxLength(10)
    ]);
    password = new FormControl('', [
        Validators.required,
        Validators.maxLength(16)
    ]);

    myForm: FormGroup = this.builder.group({
        userId: this.userId,
        password: this.password
    })


    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private builder: FormBuilder
    ) {
    }

    formSubmit(): void {
        console.log(`ユーザーID(value) is ...${this.userId.value}`);    //....... valueが表示される
        console.log(`ユーザーID(no value) is ...${this.userId}`);       //....... [object object]が表示される
        console.log(`パスワード(value) is ...${this.password.value}`);  //....... valueが表示される
        console.log(`パスワード(no value) is ...${this.password}`);     //....... [object object]が表示される
        console.log(`All value ...${this.myForm.value}`);              //....... [object object]が表示される
        console.log(`All value(no value) ...${this.myForm}`);          //....... [object object]が表示される
    }

}
