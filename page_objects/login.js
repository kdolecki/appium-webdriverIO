import welcomeScreen from './welcomeScreen';
import loginScreen from './loginScreen';
import myBodyScreen from './myBodyScreen';
import signupScreen from './signupScreen';
import settingsScreen from './settingsScreen';
import { secrets } from '../secrets';

const user = 'kamil.dolecki+test@withintent.com';
const password = 'tEst12345€&@!';
let randomString = Math.random()
    .toString(20)
    .substring(2, 6);
let randomEmail = 'automation+' + randomString + '@withintent.com';
let randomPassword = 'ABC' + randomString + '!';

// class login {
//     async waitForElementNotDisplayed(selector, timeout = 10000) {
//         const isElementDisplayed = async () => (await $(selector)).isDisplayed();
//         const endTime = Date.now() + timeout;

//         while (await isElementDisplayed()) {
//             if (Date.now() > endTime) {
//                 throw new Error(`Element '${selector}' is still displayed after waiting for ${timeout}ms.`);
//             }
//             await driver.pause(100);
//         }
//     }

//     async loginToApp() {
//         // Wait for Instabug screen to disappear
//         const instabugSelector = `~Shake your device to report a bug or feedback.`;
//         await this.waitForElementNotDisplayed(instabugSelector);
//         await welcomeScreen.welcomeToEvie();
//         await welcomeScreen.welcomeScreenText();
//         await welcomeScreen.clickOnLogIn();
//         await loginScreen.emailInput.addValue(user);
//         await this.waitForElementNotDisplayed(instabugSelector);
//         await loginScreen.passwordInput.addValue(password);
//         await loginScreen.clickLoginBtn();
//         await driver.pause(5000);
//         if ($("~Let’s connect to your ring now.").isDisplayed() === true) {
//             $('~Skip for now').click()
//         }
//         else {
//             myBodyScreen.verifyingMyBodyHeader()
//         }
//         await myBodyScreen.verifyingMyBodyHeader();
//     }
class login {
    async waitForInstabugScreenToDisappear(timeout = 10000) {
        const instabugSelector = `~Shake your device to report a bug or feedback.`;
        const isInstabugDisplayed = async () => (await $(instabugSelector)).isDisplayed();
        const endTime = Date.now() + timeout;

        while (await isInstabugDisplayed()) {
            if (Date.now() > endTime) {
                throw new Error(`Instabug screen is still displayed after waiting for ${timeout}ms.`);
            }
            await driver.pause(100);
        }
    }
    async loginToApp() {
        // Wait for Instabug screen to disappear
        await this.waitForInstabugScreenToDisappear();

        await welcomeScreen.welcomeToEvie();
        await welcomeScreen.welcomeScreenText();
        await welcomeScreen.clickOnLogIn();
        await loginScreen.emailInput.addValue(user);

        // Wait for Instabug screen to disappear again
        await this.waitForInstabugScreenToDisappear();

        await loginScreen.passwordInput.addValue(password);
        await loginScreen.clickLoginBtn();
        await driver.pause(5000);
        if ($("~Let’s connect to your ring now.").isDisplayed() === true) {
            $('~Skip for now').click()
        }
        else {
            myBodyScreen.verifyingMyBodyHeader()
        }
        await myBodyScreen.verifyingMyBodyHeader();
    }
    async loginMockUser() {
        // Wait for Instabug screen to disappear
        await this.waitForInstabugScreenToDisappear();

        await welcomeScreen.welcomeToEvie();
        await welcomeScreen.welcomeScreenText();
        await welcomeScreen.clickOnLogIn();
        await loginScreen.emailInput.addValue(secrets.MOCK_EMAIL);

        // Wait for Instabug screen to disappear again
        await this.waitForInstabugScreenToDisappear();

        await loginScreen.passwordInput.addValue(secrets.MOCK_PASSWORD);
        await loginScreen.clickLoginBtn();
        await driver.pause(5000);
        if ($("~Let’s connect to your ring now.").isDisplayed() === true) {
            $('~Skip for now').click()
        }
        else {
            myBodyScreen.verifyingMyBodyHeader()
        }
        await myBodyScreen.verifyingMyBodyHeader();
    }
    async logout() {
        await driver.pause(5000);
        await myBodyScreen.settings.click();
        await driver.execute('mobile: scroll', { direction: "down" });
        await settingsScreen.logoutBar.click();
        await driver.pause(1000);
        await settingsScreen.logoutBtn.click();
        await driver.pause(5000);
        await welcomeScreen.welcomeToEvie();
    }
    async useRandomEmail() {
        await signupScreen.emailInput.addValue(randomEmail);
    }

    async useRandomPassword() {
        await signupScreen.passwordInput.addValue(randomPassword);
    }
    async signUpAndVerify() {
        // ... (your existing signUp function logic)

        // Pause for a short period to allow the email to be delivered
        await driver.pause(5000);

        // Fetch the verification code for the user from the email
        const code = await getVerificationCodeFromEmail(secrets.userEmail, secrets.emailPassword);

        // ... (your logic to input the verification code and complete the signup process)
    }
}

export default new login;
