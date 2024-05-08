import { expect as chaiExpect } from 'chai';
import { assert as chaiAssert } from 'chai';
import { should as chaiShould } from 'chai';

const welcomeBackHeader = '~Welcome back'; // add toExist assertion or check isExisting
const emailInput = '//XCUIElementTypeTextField[@name="signin_email_textfield"]';
const passwordInput = '//XCUIElementTypeSecureTextField[@name="signin_password_textfield"]';
const forgotPasswordBtn = '~signin_forgot_password_button';
const loginBtn = '~signin_signin_button'; // need to change name as ~signin_signin_button is signUp on welcome screen
const backArrow = '~backButton';
const peekPasswordBtnOff = '-ios class chain:**/XCUIElementTypeButton[`label == "eye"`]';
const peekPasswordBtnOn = '-ios class chain:**/XCUIElementTypeButton[`label == "eyeSlash"`]';
const passwordTestAssertion = `-ios predicate string:name == "signin_password_textfield" AND value == "test"`

class loginScreen {
    async verifyingHeader() {
        await $(welcomeBackHeader).isExisting();
    }
    async clickOnEmailInput() {
        await $(emailInput).click();
    }
    async clickOnPasswordInput() {
        await $(passwordInput).click();
    }
    async clickLoginBtn() {
        await $(loginBtn).click();
    }
    async clickOnForgotPassword() {
        await $(forgotPasswordBtn).click();
    }
    async returnToPreviousScreen() {
        await $(backArrow).click();
    }
    async showPassword() {
        await $(peekPasswordBtnOn).click();
    }
    async hidePassword() {
        await $(peekPasswordBtnOff).click();
    }
    async checkPassword() {
        await $(passwordTestAssertion).isDisplayed();
    }
    get emailInput() {
        return $('//XCUIElementTypeTextField[@name="signin_email_textfield"]');
    }
    get passwordInput() {
        return $('//XCUIElementTypeSecureTextField[@name="signin_password_textfield"]');
    }
    get emailValidationText() {
        return $('(//XCUIElementTypeStaticText[@name="signin_email_textfield"])[2]');
    }
    get passwordValidationText() {
        return $('(//XCUIElementTypeStaticText[@name="signin_password_textfield"])[2]');
    }
    get invalidEmailBnr() {
        return $('~Invalid password or email');
    }
}
export default new loginScreen