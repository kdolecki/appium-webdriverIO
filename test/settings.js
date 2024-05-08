import myBodyScreen from '../page_objects/myBodyScreen'
import settingsScreen from '../page_objects/settingsScreen'
// import { assertIsDisplayed } from '../page_objects/basePage';
import login from '../page_objects/login'
import onboardingSurvey from '../page_objects/onboardingSurvey';
import { resetAppState, waitForElementNotDisplayed, scrollingDown, scrollingUp } from './appHelpers.js';


describe('Settings', () => {
    it('Log in', async () => {
        await login.loginToApp();
    });
    it( 'Notifications permission | Allow / Movano-763', async () => {
        await onboardingSurvey.verifyingNotificationsScreen();
        await onboardingSurvey.confirmNotifications();
    });
    it('Settings - Main view / Movano-37', async () => {
        await myBodyScreen.clickOnTodayMainTab();
        await myBodyScreen.settings.click();
        // need to add checking version
        // need to add checking navbar
        await settingsScreen.myAccountBar.isDisplayed();
        await settingsScreen.myProfileBar.isDisplayed();
        await settingsScreen.pairYourRingBar.isDisplayed();
        await expect(settingsScreen.personalSection).toHaveText('Personal');
        await expect(settingsScreen.myDeviceSection).toHaveText('My device');
        await expect(settingsScreen.aboutSection).toHaveText('About the app');
        await expect(settingsScreen.findUsSection).toHaveText('Find us online');
        await driver.execute('mobile: scroll', { direction: "down" });
        await settingsScreen.contactUsBar.isDisplayed();
        await settingsScreen.tosBar.isDisplayed();
        await settingsScreen.privacyPolicyBar.isDisplayed();
        await settingsScreen.followUsBar.isDisplayed();
        await settingsScreen.logoutBar.isDisplayed();
        await settingsScreen.deleteAccountBar.isDisplayed();
        await driver.execute('mobile: scroll', { direction: "up" });
    });
    it('Settings - My account / Movano-38', async () => {
        await settingsScreen.myAccountBar.click();
        await settingsScreen.myAccountHeader.isDisplayed();
        await settingsScreen.registeredWithText.isDisplayed();
        // need to add email assertion
        await driver.pause(3000);
        await settingsScreen.returnToSettings();
    });
    it('Settings - My profile / Movano-40', async () => {
        await settingsScreen.myProfileBar.click();
        await settingsScreen.myProfileHeader.isDisplayed();
        await settingsScreen.nameText.isDisplayed();
        await settingsScreen.surnameText.isDisplayed();
        await settingsScreen.nicknameText.isDisplayed();
        await settingsScreen.genderBar.isDisplayed();
        await settingsScreen.birthdayBar.isDisplayed();
        await settingsScreen.heightBar.isDisplayed();
        await settingsScreen.weightBar.isDisplayed();
        await settingsScreen.bedtimeBar.isDisplayed();
        await settingsScreen.waketimeBar.isDisplayed();
        await settingsScreen.insightsBar.isDisplayed();
        // need to add email assertion
        await settingsScreen.returnToSettings();
    });
    it('Settings - My profile - Edit profile/name / Movano-433', async () => {
        await settingsScreen.myProfileBar.click();
        await settingsScreen.myProfileHeader.isDisplayed();
        // need to add accessibility ids and then finish this tc
        await settingsScreen.returnToSettings();
    });
    it('Settings - My profile - Edit profile/gender / Movano-434', async () => {
        await settingsScreen.myProfileBar.click();
        await settingsScreen.myProfileHeader.isDisplayed();
        await settingsScreen.genderBar.click();
        await settingsScreen.howDoYouIdentifyHeader.isDisplayed();
        await settingsScreen.manBtn.click();
        await settingsScreen.submitBtn.click();
        await settingsScreen.genderManBar.isDisplayed();
        await settingsScreen.genderBar.click();
        await settingsScreen.womanBtn.click();
        await settingsScreen.submitBtn.click();
        await settingsScreen.genderWomanBar.isDisplayed();
        await settingsScreen.returnToSettings();
    });
    it('Settings - My profile - Edit profile/date of birth / Movano-436', async () => {
        await settingsScreen.myProfileBar.click();
        await settingsScreen.myProfileHeader.isDisplayed();
        await driver.pause(4000);
        await settingsScreen.birthdayBar.click();
        await driver.pause(4000);
        await settingsScreen.selectYourDateOfBirthHeader.isDisplayed();
        await settingsScreen.selectYourDateOfBirthSubheader.isDisplayed();
        await settingsScreen.cancelBtn.click();
        await driver.pause(2000);
        await settingsScreen.returnToSettings();
    });
    it('Settings - My profile - Edit profile/height / Movano-437', async () => {
        await driver.pause(2000);
        await settingsScreen.myProfileBar.click();
        await driver.pause(2000);
        await settingsScreen.myProfileHeader.isDisplayed();
        await settingsScreen.heightBar.click();
        await driver.pause(4000);
        await settingsScreen.selectYourHeight.isDisplayed();
        // need to add scrolling here
        await settingsScreen.cancelBtn.click();
        await settingsScreen.returnToSettings();
    });
    it('Settings - My profile - Edit profile/weight / Movano-438', async () => {
        await settingsScreen.myProfileBar.click();
        await settingsScreen.myProfileHeader.isDisplayed();
        await settingsScreen.weightBar.click();
        await driver.pause(4000);
        await settingsScreen.selectYourWeight.isDisplayed();
        // need to add scrolling here
        await settingsScreen.cancelBtn.click();
        await settingsScreen.returnToSettings();
    });
    it('Settings - My profile - Edit profile/bedtime / Movano-439', async () => {
        await settingsScreen.myProfileBar.click();
        await driver.pause(2000);
        await settingsScreen.myProfileHeader.isDisplayed();
        await settingsScreen.bedtimeBar.click();
        await driver.pause(4000);
        await settingsScreen.bedTimeHeader.isDisplayed();
        // need to add scrolling here
        await settingsScreen.cancelBtn.click();
        await settingsScreen.returnToSettings();
    });
    it('Settings - My profile - Edit profile/waketime / Movano-440', async () => {
        await settingsScreen.myProfileBar.click();
        await driver.pause(2000);
        await settingsScreen.myProfileHeader.isDisplayed();
        await settingsScreen.waketimeBar.click();
        await driver.pause(5000);
        await settingsScreen.wakeTimeHeader.isDisplayed();
        // need to add scrolling here
        await settingsScreen.cancelBtn.click();
        await settingsScreen.returnToSettings();
    });
    it('Settings - Menstrual cycle on/off switch / Movano-703', async () => {
        await driver.pause(1000);
        await settingsScreen.menstrualCycle.click();
        await driver.pause(1000);
        await settingsScreen.menstrualCycleHeader.isDisplayed();
        await settingsScreen.menstrualCycleText.isDisplayed();
        await settingsScreen.menstrualCycleSwitch.click();
        await settingsScreen.menstrualCycleSwitch.click();
        await settingsScreen.menstrualCycleSwitch.click();
        await settingsScreen.returnToSettings();
    });
    it('Settings - Terms of Service / Movano-449', async () => {
        await driver.execute('mobile: scroll', { direction: "down" });
        await settingsScreen.termsOfService.isDisplayed();
        await settingsScreen.termsOfService.click();
        await driver.pause(3000);
        await settingsScreen.getToSText.isDisplayed();
        // await settingsScreen.returnToSettings();
    });
    it('Swipe right to return', async () => {
        await driver.execute('mobile: scroll', { direction: 'right' });
        await driver.back();
      });
    it('Settings - Privacy Policy / Movano-450', async () => {
        await driver.execute('mobile: scroll', { direction: "down" });
        await settingsScreen.privacyPolicyBar.isDisplayed();
        await settingsScreen.privacyPolicyBar.click();
        await driver.pause(3000);
        await settingsScreen.getPrivacyPolicy.isDisplayed();
        // await settingsScreen.returnToSettings();
    });
    it('Swipe right to return', async () => {
        await driver.back();
      });
    it('Settings - Logout', async () => {
        await driver.execute('mobile: scroll', { direction: "down" });
        await login.logout();
    });
});