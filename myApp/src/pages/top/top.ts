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

    iconName: string = 'eye';
    passwordType: string = 'password';
    isHide: boolean = true;

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
    ) { }

    togglePassword() {

        this.isHide = !this.isHide;

        if (!this.isHide) {
            this.passwordType = 'text';
            this.iconName = 'eye-off';
            return;
        }

        this.passwordType = 'password';
        this.iconName = 'eye';
    }

    formSubmit(): void {
        console.log(`ユーザーID is ...${this.userId.value}`);    //....... valueが表示される
        console.log(`パスワード is ...${this.password.value}`);  //....... valueが表示される
        console.log(`メールアドレス is ...${this.email.value}`);  //....... valueが表示される
        console.log(`コード is ...${this.code.value}`);  //....... valueが表示される
        console.log(`電話番号 is ...${PhoneNumberService.formatToTypeNATIONAL(this.phoneNumber.value)}`);  //....... valueが表示される
    }

    // 確認用。5秒後にHelloWorld!が出力される。
    logMessage() {

        console.log('Wait for 5 second.');

        return new Promise(resolve => {
            setTimeout(() => {
                console.log('Hello world!');
                resolve();
            }, 5000);
        });

    }

}
