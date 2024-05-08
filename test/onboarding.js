import onboardingSurvey from '../page_objects/onboardingSurvey'
import login from '../page_objects/login'
import { resetAppState, waitForElementNotDisplayed, scrollingDown, scrollingUp } from './appHelpers.js';
import allureReporter from '@wdio/allure-reporter';


describe('Onboarding survey', () => {
    // it('Log in', async () => {
    //     await login.loginToApp();
    // });
    // it('skipPairing', async () => {
    //     await onboardingSurvey.skipPairing();
    //     await allureReporter.addDescription('skip pairing');
    //     await allureReporter.addSeverity('Normal');
    // });
    it('Onboarding survey - Lets start / Movano-319', async () => {
        await onboardingSurvey.verifyingIntroScreen();
        await onboardingSurvey.clickOnLetsStartBtn();
    });
    it('Onboarding survey - Invalid name / Movano-321', async () => {
        await onboardingSurvey.clickOnNextBtn();
        await onboardingSurvey.verifyingEmptyAlert();
        await onboardingSurvey.clickOnNextBtn();
        await onboardingSurvey.wrongFillingInInputs();
        await onboardingSurvey.clickOnNextBtn();
        await onboardingSurvey.verifyingCharAlert();

    });
    it('Onboarding survey - Name / Movano-320', async () => {
        await onboardingSurvey.verifyingNameHeader();
        await onboardingSurvey.verifyingElementsOnNameScreen();
        await onboardingSurvey.fillingInInputs();
        await onboardingSurvey.clickOnNextBtn();
    });
    it('Onboarding survey - Gender / Movano-322', async () => {
        await onboardingSurvey.verifyingGenderScreen();
        await onboardingSurvey.clickOnBackBtn();
        await onboardingSurvey.verifyingNameHeader();
        await onboardingSurvey.clickOnNextBtn();
        await onboardingSurvey.verifyingGenderScreen();
        await onboardingSurvey.clickOnMaleRadiobutton();
        await onboardingSurvey.clickOnNextBtn();
    });
    it('Track menstrual cycle / Movano-777', async () => {
        await onboardingSurvey.verifyingMenstrualCycleTrackingScreen();
        await onboardingSurvey.clickOnNoRadioBtn();
        await onboardingSurvey.clickOnYesRadioBtn();
        await onboardingSurvey.clickOnNoRadioBtn();
        await onboardingSurvey.clickOnNextBtn();
    });
    it('Onboarding survey - Date of birth / Movano-323', async () => {
        await onboardingSurvey.verifyingDateOfBirthScreen();
        await onboardingSurvey.clickOnBackBtn();
        await onboardingSurvey.verifyingMenstrualCycleTrackingScreen();
        await onboardingSurvey.clickOnNextBtn();
        await onboardingSurvey.verifyingDateOfBirthScreen();
        await onboardingSurvey.loggingDateOfBirth();
        await onboardingSurvey.clickOnNextBtn();
    });
    it('Onboarding survey - Height / Movano-324', async () => {
        await browser.setTimeout({ 'pageLoad': 10000 })
        await onboardingSurvey.verifyingHeightScreen();
        await onboardingSurvey.verifyingDefaultHeight();
        await onboardingSurvey.clickOnBackBtn();
        await onboardingSurvey.verifyingDateOfBirthScreen();
        await onboardingSurvey.clickOnNextBtn();
        await onboardingSurvey.verifyingHeightScreen();
        await onboardingSurvey.settingUpHeight();
        await onboardingSurvey.clickOnNextBtn();

    });
    it('Onboarding survey - Weight / Movano-332', async () => {
        // console.log("Before verifyingWeightScreen");
        // await onboardingSurvey.verifyingWeightScreen();
        // console.log("After verifyingWeightScreen");
        // console.log("Before settingUpWeight");
        // await onboardingSurvey.settingUpWeight();
        // console.log("After settingUpWeight");
        // console.log("Before clickOnNextBtn");
        await onboardingSurvey.clickOnNextBtn();
        console.log("After clickOnNextBtn");
    });
    it('Onboarding survey - Sleep info / Movano-333', async () => {
        await onboardingSurvey.verifyingBedTimeScreen();
        await onboardingSurvey.settingUpBedTime();
        await onboardingSurvey.clickOnNextBtn();
        await onboardingSurvey.verifyingWakeTimeScreen();
        await onboardingSurvey.settingUpWakeTime();
        await onboardingSurvey.clickOnNextBtn();
    });
    it('Onboarding survey - Needs | Error / Movano-329', async () => {
        await onboardingSurvey.verifyingNeedsScreen();
        await onboardingSurvey.clickOnNextBtn();
        await onboardingSurvey.checkingAspectsSnackbar();
        await driver.pause(4000);
    });
    it('Onboarding survey - Needs / Movano-328', async () => {
        await onboardingSurvey.verifyingNeedsScreen();
        await onboardingSurvey.selectingAspects();
        await onboardingSurvey.clickOnNextBtn();
        await onboardingSurvey.verifyingLastScreen();
        await onboardingSurvey.clickOnLetsDoThisBtn();
    });
    it('Onboarding survey - Onboarding finished / Movano-678', async () => {
        await onboardingSurvey.verifyingLastScreen();
        await onboardingSurvey.clickOnLetsDoThisBtn();
    });
    it( 'Notifications permission | Allow / Movano-763', async () => {
        await onboardingSurvey.verifyingNotificationsScreen();
        await onboardingSurvey.confirmNotifications();
    });
    // after(async function () {
    //     // Reset the app state after the onboarding test suite
    //     await resetAppState();
    // });
});