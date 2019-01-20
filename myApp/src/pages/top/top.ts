import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { EmailValidator } from "../../services/validator/email.validator";

// import { CustomValidation } from "../../services/custom.validation";
// import { PhoneNumberService } from "../../services/phone-number.service";

@IonicPage()
@Component({
    selector: 'page-top',
    templateUrl: 'top.html',
})
export class TopPage {

    isDisabled: boolean = true;

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
        EmailValidator.commonCheck,
        EmailValidator.localCheck,
        EmailValidator.domainCheck
    ]);
    // code = new FormControl('', [
    //     Validators.required,
    //     CustomValidation.numericValidator
    // ]);
    // phoneNumber = new FormControl('', [
    //     Validators.required,
    //     CustomValidation.numericValidator
    // ]);

    iconName: string = 'eye';
    passwordType: string = 'password';
    // isHide: boolean = true;

    myForm: FormGroup = this.builder.group({
        userId: this.userId,
        password: this.password,
        email: this.email,
        // code: this.code,
        // phoneNumber: this.phoneNumber
    });

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private builder: FormBuilder,
    ) {
    }

    // togglePassword() {
    //
    //     this.isHide = !this.isHide;
    //
    //     if (!this.isHide) {
    //         this.passwordType = 'text';
    //         this.iconName = 'eye-off';
    //         return;
    //     }
    //
    //     this.passwordType = 'password';
    //     this.iconName = 'eye';
    // }

    /**
     * メモ
     * ・エラーメッセージ格納処理よりも先に呼ばれてしまう
     * ・ボタンの活性非活性のタイミングが全て1テンポ遅い
     * ・keyupイベントにすることでできた。がスマホでやった時どうなるかはわからない…
     * ・ngModelChangeだとコンポーネント側の処理が先に呼ばれる。keyupだとバリデーションが先に呼ばれる。
     */
    isErrorExists() {

        // FormGroupのチェック状態を確認
        if (this.myForm.invalid) {
            this.isDisabled = true;
            return;
        }

        // 設定したcheckを通過していたらemailの形式チェックを行う。
        this.isDisabled = !!(!this.myForm.controls[ 'email' ].value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/));

    }

    formSubmit(): void {
        console.log(`ユーザーID is ...${this.userId.value}`);    //....... valueが表示される
        console.log(`パスワード is ...${this.password.value}`);  //....... valueが表示される
        console.log(`メールアドレス is ...${this.email.value}`);  //....... valueが表示される
        console.log(`FormGroup is ... ${this.myForm}`);
        // console.log(`コード is ...${this.code.value}`);  //....... valueが表示される
        // console.log(`電話番号 is ...${PhoneNumberService.formatToTypeNATIONAL(this.phoneNumber.value)}`);  //....... valueが表示される
    }

}
