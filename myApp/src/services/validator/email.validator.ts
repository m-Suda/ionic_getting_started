import { AbstractControl, ValidationErrors } from "@angular/forms";

export class EmailValidator {

    static readonly AT_SIGN = '@';
    static readonly NO_AT_SIGN = 1;
    static readonly VALID_EMAIL = 2;

    static commonCheck(control: AbstractControl): ValidationErrors | null {

        // 禁則文字を検知
        if (control.value.match(/[<>\"'&|%\\\\]/)) {
            return { 'illegalCharacter': true };
        }

        // ..または@@を検知
        if (control.value.match(/(\.|@)\1+/)) {
            return { 'email': true };
        }

        return null;
    }

    static localCheck(control: AbstractControl): ValidationErrors | null {

        // 先頭の.または@を検知
        if (control.value.match(/(^\.|^@)/)) {
            return { 'email': true };
        }

        // @直前の.を検知
        if (control.value.match(/\.+@/)) {
            return { 'email': true };
        }

        return null;

    }

    static domainCheck(control: AbstractControl): ValidationErrors | null {

        const emailAtSignByDividedArray = control.value.split(EmailValidator.AT_SIGN);
        const thatEmail = emailAtSignByDividedArray.length;

        if (thatEmail === EmailValidator.NO_AT_SIGN) {
            return null;
        }

        if (thatEmail !== EmailValidator.VALID_EMAIL) {
            return { 'email': true };
        }

        const domain = emailAtSignByDividedArray[ 1 ];

        // @直後の.を検知
        if (domain.match(/(^\.)/)) {
            return { 'email': true };
        }

        return null;

    }

}