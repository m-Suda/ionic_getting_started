import { EmailValidator } from "../services/validator/email.validator";
import { FormControl } from "@angular/forms";

describe('EmailValidatorTest', () => {

    describe('Common Test', () => {

        it('IllegalChar has to Local', () => {
            const ctrl = new FormControl('localCheck%@domainCheck.com');
            expect(EmailValidator.commonCheck(ctrl)).toEqual({ 'illegalCharacter': true });
        });

        it('IllegalChar has to Domain', () => {
            const ctrl = new FormControl('localCheck@%domainCheck.com');
            expect(EmailValidator.commonCheck(ctrl)).toEqual({ 'illegalCharacter': true });
        });

        it('Dot Local continuously exists', () => {
            const ctrl = new FormControl('local..localCheck@domainCheck.com');
            expect(EmailValidator.commonCheck(ctrl)).toEqual({ 'email': true });
        });

        it('Dot Domain continuously exists', () => {
            const ctrl = new FormControl('localCheck@domainCheck..com');
            expect(EmailValidator.commonCheck(ctrl)).toEqual({ 'email': true });
        });

        it('AtSign continuously exists', () => {
            const ctrl = new FormControl('local.localCheck@@domainCheck.com');
            expect(EmailValidator.commonCheck(ctrl)).toEqual({ 'email': true });
        });

        it('No IllegalChar', () => {
            const ctrl = new FormControl('localCheck@domainCheck.com');
            expect(EmailValidator.commonCheck(ctrl)).toBeNull();
        });

    });

    describe('Local Test', () => {

        it('Dot has to first', () => {
            const ctrl = new FormControl('.localCheck@domainCheck.com');
            expect(EmailValidator.localCheck(ctrl)).toEqual({ 'email': true });
        });

        it('Dot just before AtSign', () => {
            const ctrl = new FormControl('local.@domainCheck.com');
            expect(EmailValidator.localCheck(ctrl)).toEqual({ 'email': true });
        });

        it('Position appropriate Dot', () => {
            const ctrl = new FormControl('local.localCheck@domainCheck.com');
            expect(EmailValidator.localCheck(ctrl)).toBeNull();
        });

    });

    describe('Domain Test', () => {

        it('Domain AtSign Exists', () => {
            const ctrl = new FormControl('localCheck@domain@example.com');
            expect(EmailValidator.domainCheck(ctrl)).toEqual({ 'email': true });
        });

        it('AtSign continuously exists', () => {
            const ctrl = new FormControl('localCheck@@example.com');
            expect(EmailValidator.domainCheck(ctrl)).toEqual({ 'email': true });
        });

        it('Dot immediately after AtSign', () => {
            const ctrl = new FormControl('localCheck@.domain.com');
            expect(EmailValidator.domainCheck(ctrl)).toEqual({ 'email': true });
        });

        it('Appropriate Domain', () => {
            const ctrl = new FormControl('local@domain.com');
            expect(EmailValidator.domainCheck(ctrl)).toBeNull();
        });

    });

});