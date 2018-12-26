import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { CustomValidation } from "../../../services/custom.validation";

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

                return CustomValidation.getValidationErrorMessage(validatorName, this.control.errors[ validatorName ]);
            }
        }

        return null;
    }
}