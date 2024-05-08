import { expect as chaiExpect } from 'chai';
import { assert as chaiAssert } from 'chai';
import { should as chaiShould } from 'chai';

const backArrow = '~backButton'
const getStartedHeader = '~Get started'
const enterEmailHeader = '~Enter your email to register'
// const emailInput = '~signup_email_textfield'
const peekPswrdBtn = '**/XCUIElementTypeButton[`label == "eyeSlash"`]'
class signupScreen {
    async verifyingHeader() {
        await $(getStartedHeader).isExisting();
    }
    async verifyingSubheader() {
        await $(enterEmailHeader).isExisting();
    }
    async returnToPreviousScreen() {
        await $(backArrow).click();
    }
    // get emailInput() {
    //     return $('~signup_email_textfield');
    // }
    get emailInput() {
        return $('//XCUIElementTypeTextField[@name="signup_email_textfield"]');
    }
    get continueBtn() {
        return $('~signup_continue_button');
    }
    // get passwordInput() {
    //     return $('~signup_password_textfield');
    // }
    get passwordInput() {
        return $('//XCUIElementTypeSecureTextField[@name="signup_password_textfield"]');
    }
    get confirmBtn() {
        return $('~signup_confirm_button');
    }
    get createAccountBtn() {
        return $('~signup_create_account_button');
    }
    get emailValidationText() {
        return $('(//XCUIElementTypeStaticText[@name="signup_email_textfield"])[2]');
    }
    get passwordValidationText() {
        return $('(//XCUIElementTypeStaticText[@name="signup_password_textfield"])[2]');
    }
    get invalidPasswordBnr() {
        return $('~Invalid password or email, or email already registered.');
    }
    get peekPasswordBtn() {
        return $(`-ios class chain:${peekPswrdBtn}`);
    }
    get codeInput() {
        return $('//XCUIElementTypeTextField[@name="resetpassword_code_textfield"]')
    }
    get createAccountBtn2() {
        return $('~resetpassword_confirm_reset_button');
    }
    get invalidCodeText() {
        return $('-ios class chain:**/XCUIElementTypeStaticText[`label == "Invalid code. Please try again or request another code."`]')
    }
}
export default new signupScreen
