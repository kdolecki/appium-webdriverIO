import { expect as chaiExpect } from 'chai';
import { assert as chaiAssert } from 'chai';
import { should as chaiShould } from 'chai';

const appleBtn = '//XCUIElementTypeButton[@name="Continue with Apple"]'
const googleBtn = '//XCUIElementTypeButton[@name="Continue with Google"]'
const signupBtn = '~signin_signin_button'
const loginBtn = '~signin_signup_button'
const tosBtn = '~Terms of Service'
const privacyBtn = '~Privacy Policy'
const welcomeToEvieText = '~Welcome to Evie'
const subheaderText = '~Enhance your body-knowledge with a dedicated ring for women.'
const bottomWSText = '~By continuing, you accept our'
const tos = '~These Terms of Use (“Terms”) are a legal agreement between you and Movano Inc. (“Movano Inc.” or “us” or “we” or “our”) that governs your use of our websites (located at Movano.com, Movanodiabetes.com, Movanoglucose.com, Movanohealth.com, Movanoheart.com, Movanosleep.com, Eviering.com) and any related website or services provided by Movano Inc. (collectively, the “Services”). The words “user,” “you,” and “your” refer to entities or individuals that access or use the Services. These Terms do not alter in any way the terms or conditions of any other agreement you may have with us. If you are using the Services on behalf of an entity, you represent and warrant that you are authorized to accept these Terms on such entity’s behalf. '
const privacy = '~_TtGC7SwiftUI19UIHosting'
const backArrow = '~Back'

class welcomeScreen {
    async continueWithApple() {
        await $(appleBtn).isDisplayed();
    }
    async clickOnContinueWithApple() {
        await $(appleBtn).click();
    }
    async continueWithGoogle() {
        await $(googleBtn).isDisplayed();
    }
    async clickOnContinueWithGoogle() {
        await $(googleBtn).click();
    }
    async continueWithEmail() {
        await $(signupBtn).isDisplayed();
    }
    async clickOnContinueWithEmail() {
        await $(signupBtn).click();
    }
    async logIn() {
        await $(loginBtn).isDisplayed();
    }
    async clickOnLogIn() {
        await $(loginBtn).click();
    }
    async clickOnToS() {
        await $(tosBtn).click();
    }
    async clickOnPrivacy() {
        await $(privacyBtn).click();
    }
    async welcomeToEvie() {
        await $(welcomeToEvieText).isDisplayed();
    }
    async welcomeScreenText() {
        await $(subheaderText).isDisplayed();
    }
    async bottomWelcomeScreenText() {
        await $(bottomWSText).isDisplayed();
    }
    async termsOfService() {
        await $(tos).isDisplayed();
    }
    async privacyPolicy() {
        await $(privacy).isDisplayed();
    }
    async returnToPreviousScreen() {
        await $(backArrow).click();
    }
    get TOS1() {
        return $('~Terms of Service');
    }
}

export default new welcomeScreen