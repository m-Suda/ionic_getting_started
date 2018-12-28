import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { CustomValidation } from "../../services/custom.validation";
import { PhoneNumberService } from "../../services/phone-number.service";

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
    email = new FormControl('', [
        Validators.required,
        CustomValidation.emailValidator
    ]);
    code = new FormControl('', [
        Validators.required,
        CustomValidation.numericValidator
    ]);
    phoneNumber = new FormControl('', [
        Validators.required,
        CustomValidation.numericValidator
    ]);


    myForm: FormGroup = this.builder.group({
        userId: this.userId,
        password: this.password,
        email: this.email,
        code: this.code,
        phoneNumber: this.phoneNumber
    });


    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private builder: FormBuilder,
        // private phoneNumberService: PhoneNumberService
    ) {
    }

    formSubmit(): void {
        console.log(`ユーザーID is ...${this.userId.value}`);    //....... valueが表示される
        console.log(`パスワード is ...${this.password.value}`);  //....... valueが表示される
        console.log(`メールアドレス is ...${this.email.value}`);  //....... valueが表示される
        console.log(`コード is ...${this.code.value}`);  //....... valueが表示される
        console.log(`電話番号 is ...${PhoneNumberService.formatToTypeNATIONAL(this.phoneNumber.value)}`);  //....... valueが表示される
    }

}
