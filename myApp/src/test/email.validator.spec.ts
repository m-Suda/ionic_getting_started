import { EmailValidator } from "../services/validator/email.validator";
import { FormControl } from "@angular/forms";

describe('Emailバリデータテスト始まるよ！', () => {

    describe('共通のテストだよ！', () => {

        it('ローカル部分に禁則文字を入れたよ', () => {
            const ctrl = new FormControl('localCheck%@domainCheck.com');
            expect(EmailValidator.commonCheck(ctrl)).toEqual({ 'illegalCharacter': true });
        });

        it('ドメイン部分に禁則文字を入れたよ', () => {
            const ctrl = new FormControl('localCheck@%domainCheck.com');
            expect(EmailValidator.commonCheck(ctrl)).toEqual({ 'illegalCharacter': true });
        });

        it('ローカル部分に.を連続で入れたよ', () => {
            const ctrl = new FormControl('local..localCheck@domainCheck.com');
            expect(EmailValidator.commonCheck(ctrl)).toEqual({ 'email': true });
        });

        it('ドメイン部分に.を連続で入れたよ', () => {
            const ctrl = new FormControl('localCheck@domainCheck..com');
            expect(EmailValidator.commonCheck(ctrl)).toEqual({ 'email': true });
        });

        it('@を連続で入れたよ', () => {
            const ctrl = new FormControl('local.localCheck@@domainCheck.com');
            expect(EmailValidator.commonCheck(ctrl)).toEqual({ 'email': true });
        });

        it('適切なメールアドレスだよ', () => {
            const ctrl = new FormControl('localCheck@domainCheck.com');
            expect(EmailValidator.commonCheck(ctrl)).toBeNull();
        });

    });

    describe('ローカル部分だよ', () => {

        it('先頭に.を入れたよ', () => {
            const ctrl = new FormControl('.localCheck@domainCheck.com');
            expect(EmailValidator.localCheck(ctrl)).toEqual({ 'email': true });
        });

        it('先頭に@を入れたよ', () => {
            const ctrl = new FormControl('@local@domainCheck.com');
            expect(EmailValidator.localCheck(ctrl)).toEqual({ 'email': true });
        });

        it('@の直前に.を入れたよ', () => {
            const ctrl = new FormControl('local.@domainCheck.com');
            expect(EmailValidator.localCheck(ctrl)).toEqual({ 'email': true });
        });

        it('適切なメールアドレスだよ', () => {
            const ctrl = new FormControl('local.localCheck@domainCheck.com');
            expect(EmailValidator.localCheck(ctrl)).toBeNull();
        });

    });

    describe('ドメイン部分だよ', () => {

        it('ドメイン部分に@を2つ入れたよ その1', () => {
            const ctrl = new FormControl('localCheck@domain@example.com');
            expect(EmailValidator.domainCheck(ctrl)).toEqual({ 'email': true });
        });

        it('ドメイン部分に@を2つ入れたよ その2', () => {
            const ctrl = new FormControl('localCheck@@example.com');
            expect(EmailValidator.domainCheck(ctrl)).toEqual({ 'email': true });
        });

        it('@の直後に.を入れたよ', () => {
            const ctrl = new FormControl('localCheck@.domain.com');
            expect(EmailValidator.domainCheck(ctrl)).toEqual({ 'email': true });
        });

        it('適切なメールアドレスだよ', () => {
            const ctrl = new FormControl('local@domain.com');
            expect(EmailValidator.domainCheck(ctrl)).toBeNull();
        });

    });

});