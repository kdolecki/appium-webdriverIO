import myBodyScreen from '../page_objects/myBodyScreen';
// import { assertIsDisplayed } from '../page_objects/basePage';
import login from '../page_objects/login';
import heartRate from '../page_objects/heartRate';
import spotCheck from '../page_objects/spotCheck';
import sleep from '../page_objects/sleep';
import banners from '../page_objects/banners';
import { resetAppState, waitForElementNotDisplayed, scrollingDown, scrollingUp } from './appHelpers.js';


describe('My body / Activity', () => {
    it('Log in', async () => {
        await login.loginToApp();
        await driver.pause(5000);
    });
    it('Active time - Overview | Empty state / Movano-178', async () => {
        await myBodyScreen.clickOnMyBodyTab();
        await driver.pause(2000);
        await myBodyScreen.verifyingActiveMinEmptyState();
    });
    it('Active time - Details | Empty state / Movano-549', async () => {
        await driver.pause(2000);
        await myBodyScreen.moveToActiveMinDetails();
        await myBodyScreen.verifyingActiveMinEmptyDetailsScreen();
        await myBodyScreen.clickOnWeekTab();
        await myBodyScreen.verifyingActiveMinEmptyDetailsScreen();
        await myBodyScreen.clickOnMonthTab();
        await myBodyScreen.verifyingActiveMinEmptyDetailsScreen();
        await myBodyScreen.clickOnBackBtn();
    });
    it('Steps - Overview | Empty state / Movano-288', async () => {
        await myBodyScreen.clickOnTopOfStepsBtn();
        await myBodyScreen.verifyingStepsEmptyState();
    });
    it('Steps - Details | Empty state / Movano-555', async () => {
        await driver.pause(2000);
        await myBodyScreen.moveToStepsDetails();
        await myBodyScreen.verifyingStepsEmptyDetailsScreen();
        await myBodyScreen.clickOnWeekTab();
        await myBodyScreen.verifyingStepsEmptyDetailsScreen();
        await myBodyScreen.clickOnMonthTab();
        await myBodyScreen.verifyingStepsEmptyDetailsScreen();
        await myBodyScreen.clickOnBackBtn();
    });
    it('Cal - Overview | Empty state / Movano-292', async () => {
        await myBodyScreen.clickOnCaloriesTab();
        await myBodyScreen.verifyingCaloriesEmptyState();
    });
    it('Heart Rate - Overview | No data in the last 6 hours / Movano-297', async () => {
        await driver.execute('mobile: scroll', { direction: "down" });
        await heartRate.verifyingHeartRateEmptyState();
    });
    it('Heart rate - Details | Empty state / Movano-275', async () => {
        await driver.pause(2000);
        await myBodyScreen.moveToHRDetails();
        await myBodyScreen.verifyingHREmptyDetailsScreen();
        await myBodyScreen.clickOnWeekTab();
        await myBodyScreen.verifyingHREmptyDetailsScreen();
        await myBodyScreen.clickOnMonthTab();
        await myBodyScreen.verifyingHREmptyDetailsScreen();
        await myBodyScreen.clickOnBackBtn();
    });
    // it('Spot check - empty state / Movano-381', async () => {
    //     await driver.execute('mobile: scroll', { direction: "down"});
    //     await spotCheck.verifyingSpotCheckEmptyState();
    // });
    // it('Your sleep - empty state / Movano-286', async () => {
    //     await driver.execute('mobile: scroll', { direction: "down" });
    //     await sleep.verifyingYourSleepEmptyState();
    // });
    // it('Vitals during sleep - empty state / Movano-182', async () => {
    //     await driver.execute('mobile: scroll', { direction: "down" });
    //     await sleep.verifyingYourSleepVitalsEmptyState();
    // });
    // it('Banners - No ring paired/ Movano-420', async () => {
    //     await myBodyScreen.clickOnTodayMainTab();
    //     await banners.verifyingNoRingPairedBanner();
    // });
    it('Logout', async () => {
        await myBodyScreen.clickOnTodayMainTab();
        await login.logout();
    })
});