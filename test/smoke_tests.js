import welcomeScreen from '../page_objects/welcomeScreen';
import loginScreen from '../page_objects/loginScreen';
import signupScreen from '../page_objects/signupScreen';
import myBodyScreen from '../page_objects/myBodyScreen';
import login from '../page_objects/login';
// import allureReporter from '@wdio/allure-reporter';
import { resetAppState, getVerificationCodeFromEmail, waitForElementNotDisplayed, handleSystemAlert, scrollingDown, scrollingUp, createRandomEmail, createRandomPassword } from './appHelpers.js';
const allureReporter = require('@wdio/allure-reporter').default;
import { secrets } from '../secrets';
const randomEmail = createRandomEmail();
const randomPassword = createRandomPassword();

describe('smoke tests', () => {

  it('Sign in | Success / Movano-13', async () => {
    await welcomeScreen.welcomeToEvie();
    await welcomeScreen.welcomeScreenText();
    await welcomeScreen.clickOnLogIn();
    await loginScreen.emailInput.addValue('kamil.dolecki+test@withintent.com');
    await loginScreen.passwordInput.addValue(secrets.TEST_PASSWORD);
    await loginScreen.clickLoginBtn();
    await driver.pause(1000);
    await myBodyScreen.verifyingMyBodyHeader()
    //  driver.setTimeouts(10000);
  });
  it('Logout', async () => {
    await login.logout();
    // await driver.activateApp('com.movano.ios.debug');
  })
});

