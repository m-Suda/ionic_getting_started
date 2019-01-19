import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: 'error-message',
    template: `
        <div [style.display]="errorMessage !== null ? 'block' : 'none'">{{errorMessage}}</div>`,
    styles: [ `
        div {
            color: red;
            font-size: 12px;
        }
    ` ]
})
export class ErrorMessage {

    @Input() control: FormControl;

    /**
     * エラーメッセージを取得する。
     * @return string | null
     */
    get errorMessage(): string | null {

        for (let validatorName in this.control.errors) {

            if (this.control.errors.hasOwnProperty(validatorName) && (this.control.touched || this.control.dirty)) {

                return this.getValidationErrorMessage(validatorName, this.control.errors[ validatorName ]);
            }
        }

        return null;
    }

    /**
     * バリデーションチェック対象のエラーメッセージを返却する。
     * @param validatorName
     * @param validatorValue
     * @return string
     */
    private getValidationErrorMessage(validatorName: string, validatorValue?: any) {

        let config = {
            'required': `必須項目です。`,
            'email': 'メールアドレスの形式が正しくありません。',
            'illegalCharacter': '禁則文字が含まれています。',
            'invalidNumeric': 'コードは数字のみ使用できます。',
            'maxlength': `${validatorValue.requiredLength}字以内で入力してください。`
        };

        return config[ validatorName ]
    }

}