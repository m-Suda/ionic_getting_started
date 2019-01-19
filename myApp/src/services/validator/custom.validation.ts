import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidation {

    /**
     * emailの形式に沿っているか判定する。
     * @param control
     * @return { key: true} | null
     */
    static emailValidator(control: AbstractControl): ValidationErrors | null {

        return !control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
            ? { 'invalidEmail': true } : null;
    }

    /**
     * 数値だけかを判定する。
     * @param control
     * @return { key: true} | null
     */
    static numericValidator(control: AbstractControl): ValidationErrors | null {

        return !control.value.match(/^[0-9]+$/)
            ? { 'invalidNumeric': true } : null;
    }

}