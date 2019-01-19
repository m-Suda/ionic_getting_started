import { CustomValidation } from "../services/validator/custom.validation";
import { FormControl } from "@angular/forms";

describe('CustomValidation Test', () => {

    it('Email types Test Success', () => {
        const ctrl = new FormControl('hoge@hoge.com');
        expect(CustomValidation.emailValidator(ctrl)).toBeNull();
    });

    it('Email types Test Failure', () => {
        const ctrl = new FormControl('hoge@@hoge.com');
        expect(CustomValidation.emailValidator(ctrl)).toEqual({ 'invalidEmail': true });
    });
});
