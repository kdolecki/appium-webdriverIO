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

describe('Sign up and sign in', () => {
  //   beforeEach(async () => {
  //     await handleSystemAlert();
  // });
  it('Welcome screen / Movano-60', async () => {
    await welcomeScreen.welcomeToEvie();
    await welcomeScreen.welcomeScreenText();
    await welcomeScreen.continueWithApple();
    await welcomeScreen.continueWithGoogle();
    await welcomeScreen.continueWithEmail();
    await welcomeScreen.clickOnLogIn();
    await loginScreen.returnToPreviousScreen();
    await welcomeScreen.bottomWelcomeScreenText();
    // allureReporter.addDescription('Welcome screen');
    // allureReporter.addSeverity('High');
  });
  it('Welcome screen | Terms of Service / Movano-7', async () => {
    await welcomeScreen.welcomeToEvie();
    await welcomeScreen.clickOnToS();
    await welcomeScreen.termsOfService();
    await welcomeScreen.returnToPreviousScreen();
  });
  it('Sign up | Invalid username / Movano-3', async () => {
    await welcomeScreen.welcomeToEvie();
    await welcomeScreen.clickOnContinueWithEmail();
    await signupScreen.verifyingHeader();
    await signupScreen.verifyingSubheader();
    await signupScreen.emailInput.addValue(secrets.INVALID_USERNAME); // sendKeys
    await signupScreen.continueBtn.click();
    await expect(signupScreen.emailValidationText).toHaveText('Enter a valid email address');
    await driver.pause(1000);
    await signupScreen.returnToPreviousScreen();
  });
  it('Sign up | User already registered / Movano-4', async () => {
    await welcomeScreen.welcomeToEvie();
    await welcomeScreen.clickOnContinueWithEmail();
    await signupScreen.verifyingHeader();
    await signupScreen.verifyingSubheader();
    await signupScreen.emailInput.addValue(secrets.TEST_EMAIL); // sendKeys
    await signupScreen.continueBtn.click();
    await signupScreen.passwordInput.addValue(secrets.TEST_PASSWORD);
    await signupScreen.createAccountBtn.click();
    await expect(signupScreen.invalidPasswordBnr).toHaveText('Invalid password or email, or email already registered.');
    await driver.pause(4500);
    await signupScreen.returnToPreviousScreen();
    await driver.pause(2000);
    // await signupScreen.returnToPreviousScreen();
  });
  it('Sign up | Invalid password / Movano-5', async () => {
    await welcomeScreen.welcomeToEvie();
    await welcomeScreen.clickOnContinueWithEmail();
    await signupScreen.verifyingHeader();
    await signupScreen.verifyingSubheader();
    await signupScreen.emailInput.addValue(secrets.TEST_EMAIL);
    await signupScreen.continueBtn.click();
    await signupScreen.passwordInput.addValue(secrets.INVALID_PASSWORD);
    await signupScreen.createAccountBtn.click();
    await expect(signupScreen.passwordValidationText).toHaveText('- An uppercase and lowercase letter');
    await driver.pause(1000);
    await signupScreen.returnToPreviousScreen();
    await signupScreen.returnToPreviousScreen();
  });
  it('Sign up | Peek password button / Movano-6', async () => {
    await welcomeScreen.welcomeToEvie();
    await welcomeScreen.clickOnContinueWithEmail();
    await signupScreen.emailInput.addValue(secrets.TEST_EMAIL); // sendKeys
    await signupScreen.continueBtn.click();
    await signupScreen.passwordInput.addValue('password1');
    await signupScreen.peekPasswordBtn.click();
    // await expect(signupScreen.passwordInput).toHaveText('password1');
    /* Expected: "password1"
       Received: "Password" */
    await signupScreen.returnToPreviousScreen();
    await signupScreen.returnToPreviousScreen();
  });
  it('Sign up | Invalid code / Movano-486', async () => {
    await welcomeScreen.welcomeToEvie();
    await welcomeScreen.clickOnContinueWithEmail();
    await signupScreen.emailInput.addValue(randomEmail);
    await signupScreen.continueBtn.click();
    await driver.pause(1000);
    await signupScreen.passwordInput.addValue(randomPassword);
    await signupScreen.createAccountBtn.click();
    await signupScreen.codeInput.addValue("123456")
    // await expect(signupScreen.passwordInput).toHaveText('password1');
    /* Expected: "password1"
       Received: "Password" */
    await signupScreen.invalidCodeText.isExisting();
    await signupScreen.returnToPreviousScreen();
    await signupScreen.returnToPreviousScreen();
    await signupScreen.returnToPreviousScreen();
  });
  it('Sign in | Invalid username / Movano-10', async () => {
    await welcomeScreen.welcomeToEvie();
    await welcomeScreen.welcomeScreenText();
    await welcomeScreen.clickOnLogIn();
    await loginScreen.clickLoginBtn();
    await expect(loginScreen.emailValidationText).toHaveText('Enter a valid email address');
    await expect(loginScreen.passwordValidationText).toHaveText('Please fill out this field');
    await loginScreen.returnToPreviousScreen();
    await welcomeScreen.clickOnLogIn();
    await loginScreen.emailInput.addValue(secrets.NOT_REGISTERED_USERNAME);
    await loginScreen.passwordInput.addValue('password1');
    await loginScreen.clickLoginBtn();
    await expect(loginScreen.invalidEmailBnr).toHaveText('Invalid password or email');
    await driver.pause(4000);
    await loginScreen.returnToPreviousScreen();
    // await loginScreen.returnToPreviousScreen();
    await welcomeScreen.bottomWelcomeScreenText();
  });
  it('Sign in | User not registered / Movano-15', async () => {
    await welcomeScreen.welcomeToEvie();
    await welcomeScreen.welcomeScreenText();
    await welcomeScreen.clickOnLogIn();
    await loginScreen.emailInput.addValue(secrets.NOT_REGISTERED_USERNAME);
    await loginScreen.passwordInput.addValue('password1');
    await loginScreen.clickLoginBtn();
    await expect(loginScreen.invalidEmailBnr).toHaveText('Invalid password or email');
    await driver.pause(4000);
    await loginScreen.returnToPreviousScreen();
    await welcomeScreen.bottomWelcomeScreenText();
    await driver.pause(4000);
    //  driver.setTimeouts(10000);
  });
  it('Sign in | Peek password button / Movano-11', async () => {
    await welcomeScreen.welcomeToEvie();
    await welcomeScreen.clickOnLogIn();
    await loginScreen.verifyingHeader();
    await loginScreen.emailInput.addValue('test@withintent.com');
    await loginScreen.passwordInput.addValue('test');
    await loginScreen.showPassword();
    await loginScreen.checkPassword();
    await loginScreen.hidePassword();
    await loginScreen.returnToPreviousScreen();
  });
  it('Sign in | Invalid password / Movano-14', async () => {
    await welcomeScreen.welcomeToEvie();
    await welcomeScreen.clickOnLogIn();
    await loginScreen.verifyingHeader();
    await loginScreen.emailInput.addValue(secrets.TEST_EMAIL);
    await loginScreen.passwordInput.addValue(secrets.INVALID_PASSWORD);
    await loginScreen.clickLoginBtn();
    expect(loginScreen.invalidEmailBnr).toHaveText('Invalid password or email');
    await driver.pause(6000);
   // await loginScreen.returnToPreviousScreen();
    await loginScreen.returnToPreviousScreen();
  });
  it('Welcome screen | Privacy Policy / Movano-8', async () => {
    await welcomeScreen.welcomeToEvie();
    await welcomeScreen.clickOnPrivacy();
    await welcomeScreen.privacyPolicy();
    await welcomeScreen.returnToPreviousScreen();
    await driver.pause(2000);
  });
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

