import welcomeScreen from '../page_objects/welcomeScreen';
import signupScreen from '../page_objects/signupScreen';
import onboardingSurvey from '../page_objects/onboardingSurvey';
import myBodyScreen from '../page_objects/myBodyScreen';
import { resetAppState, getVerificationCodeFromEmail, waitForElementNotDisplayed, handleSystemAlert, scrollingDown, scrollingUp, createRandomAutomationEmail, createRandomPassword  } from './appHelpers.js';
import { secrets } from '../secrets';

// need to add sth to handle exisitng email
describe('Sign up', () => {
  const randomEmail = createRandomAutomationEmail();
  const randomPassword = createRandomPassword();

  it('Sign up', async () => {
    try {
      // Welcome
      await welcomeScreen.welcomeToEvie();
      await driver.pause(10000);
      await welcomeScreen.clickOnContinueWithEmail();

      // Signup
      await signupScreen.emailInput.addValue(randomEmail);
      await signupScreen.continueBtn.click();
      await driver.pause(1000);
      await signupScreen.passwordInput.addValue(randomPassword);
      await signupScreen.createAccountBtn.click();

      // Wait for bug report prompt to disappear
      await waitForElementNotDisplayed("~Shake your device to report a bug or feedback.");

      // Wait for a set time before moving forward
      const WAIT_TIME_MS = 5000;
      await new Promise(resolve => setTimeout(resolve, WAIT_TIME_MS));

      // Get verification code from email
      const emailVerificationCode = await getVerificationCodeFromEmail(secrets.userEmail, secrets.emailPassword);

      // Input verification code and create account
      await signupScreen.codeInput.addValue(emailVerificationCode)
      await signupScreen.createAccountBtn2.click();
        if ($("~Let’s connect to your ring now.").isDisplayed == true) {
          $('~Skip for now').click()
      }
      else {
          myBodyScreen.verifyingMyBodyHeader()
      }
      // Onboarding survey
      await onboardingSurvey.clickOnGotItBtn();
      await driver.pause(10000);
    } catch (error) {
      console.log('Error during sign up: ', error);
    }
  });
});