import libphonenumber from 'google-libphonenumber';
import PhoneNumberUtil = libphonenumber.PhoneNumberUtil;
import PhoneNumberFormat = libphonenumber.PhoneNumberFormat;
import PhoneNumber = libphonenumber.PhoneNumber;

export class PhoneNumberService {

    private util: PhoneNumberUtil;

    constructor() {
        this.util = libphonenumber.PhoneNumberUtil.getInstance();
    }

    private phoneNumberParseJP(phoneNumber: string): PhoneNumber {

        return this.util.parse(phoneNumber, 'JP');
    }

    formatToTypeNATIONAL(phoneNumber: string): string {

        return this.util.format(this.phoneNumberParseJP(phoneNumber), PhoneNumberFormat.NATIONAL);
    }

    // static util: PhoneNumberUtil = libphonenumber.PhoneNumberUtil.getInstance();
    //
    // private static phoneNumberParseJP(phoneNumber: string): PhoneNumber {
    //
    //     return PhoneNumberService.util.parse(phoneNumber, 'JP');
    // }
    //
    // static formatToTypeNATIONAL(phoneNumber: string): string {
    //
    //     return PhoneNumberService.util.format(this.phoneNumberParseJP(phoneNumber), PhoneNumberFormat.NATIONAL);
    // }
}