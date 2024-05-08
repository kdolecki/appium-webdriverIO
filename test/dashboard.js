import dashboard from '../page_objects/dashboard';
import login from '../page_objects/login';
import { resetAppState, waitForElementNotDisplayed, scrollingDown, scrollingUp } from './appHelpers.js';

describe('Goals', () => {
    // afterEach(async function () {
    //     if (this.currentTest.state === 'failed') {
    //         throw new Error('Test case failed')
    //     }
    // });
    // it('Login', async () => {
    //     await login.loginToApp();
    // });
    it('Donut - empty state / Movano-733', async () => {
        await dashboard.verifyingEmptyDashboardScreen();
        await driver.pause(1000);
    });
    it('Goal CTA tile on Dashboard variants - setting goals | No goals set / Movano-682', async () => {
        await dashboard.verifyingEmptyDashboardScreen();
        await driver.pause(1000);
        await dashboard.clickOnSetAGoalButton();
        await dashboard.verifyingAllGoalsScreen();
    });
    it('Setting a goal - Steps | User selects a goal category / MOV-665', async () => {
        await dashboard.verifyingEmptyDashboardScreen();
        await driver.pause(1000);
        // await scrollingDown();
        await dashboard.verifyingSettingStepsGoalScreen();
    });
    it('Setting a goal - Steps | User selects the value of the goal / MOV-666', async () => {
        await dashboard.settingStepsGoalValue();
        await driver.pause(1000);
        await dashboard.clickNextButton();
    });
    it('Setting a goal - Steps | User saves the goal / MOV-667', async () => {
        await dashboard.verifyingSuccessStepsScreen();
        await driver.pause(1000);
        await dashboard.clickGotItButton();
    });
    it('Goal CTA tile on Dashboard variants - setting goals | 1 goal set / MOV-683', async () => {
        await dashboard.verifyingDashboardScreenAfter1GoalSet();
        await driver.pause(1000);
    });
    it('Setting a goal - Sleep | User selects a goal category / MOV-669', async () => {
        await dashboard.verifyingSettingSleepGoalScreen();
    });
    it('Setting a goal - Sleep | User selects the value of the goal / MOV-670', async () => {
        await dashboard.settingSleepGoalValue();
        await driver.pause(1000);
        await dashboard.clickNextButton();
    });
    it('Setting a goal - Sleep | User saves the goal / MOV-671', async () => {
        await dashboard.verifyingSuccessSleepScreen();
        await driver.pause(1000);
        await dashboard.clickGotItButton();
    });
    it('Goal CTA tile on Dashboard variants - setting goals | 2 goals set / MOV-684', async () => {
        await dashboard.verifyingDashboardScreenAfter2GoalsSet();
        await driver.pause(1000);
    });
    it('Setting a goal - Active min | User selects a goal category/ MOV-673', async () => {
        await dashboard.verifyingActiveMinGoalScreen();
    });
    it('Setting a goal - Active min | User selects the value of the goal / MOV-674', async () => {
        await dashboard.settingActiveMinGoalValue();
        await driver.pause(1000);
        await dashboard.clickNextButton();
    });
    it('Setting a goal - Active min | User saves the goal / MOV-675', async () => {
        await dashboard.verifyingSuccessActiveMinScreen();
        await driver.pause(1000);
        await dashboard.clickGotItButton();
    });
    it('Goal CTA tile on Dashboard variants - setting goals | 3 goals set / MOV-685', async () => {
        await dashboard.verifyingDashboardScreenAfter3GoalsSet();
        await driver.pause(1000);
    });
    it('Goal deactivating / MOV-704', async () => {
        await dashboard.moveToStepDetails();
        await driver.execute('mobile: scroll', { direction: "down" });
        await dashboard.deactivatingGoal();
        await driver.pause(1000);
        await dashboard.checkingGoalDeactivatedBanner();
    });
    it('Setting a goal - Mood & Symptoms | User selects a goal category / MOV-705', async () => {
        await dashboard.verifyingSettingJournalGoalScreen();
    });
    it('Setting a goal - Mood & Symptoms | User selects the value of the goal / MOV-706', async () => {
        await dashboard.settingJournalGoalValue();
        await driver.pause(1000);
        await dashboard.clickNextButton();
    });
    it('Setting a goal - Mood & Symptoms | User saves the goal / MOV-707', async () => {
        await dashboard.verifyingSuccessJournalScreen();
        await driver.pause(1000);
        await dashboard.clickGotItButton();
    });
    it('Goal deactivating / MOV-704', async () => {
        await dashboard.moveToSleepDetails();
        await driver.execute('mobile: scroll', { direction: "down" });
        await dashboard.deactivatingGoal();
        await driver.pause(1000);
        await dashboard.checkingGoalDeactivatedBanner();
    });
    it('Setting a goal - Workout sessions | User selects a goal category / MOV-710', async () => {
        await dashboard.verifyingSettingWorkoutGoalScreen();
    });
    it('Setting a goal - Workout sessions | User selects the value of the goal / MOV-711', async () => {
        await dashboard.settingWorkoutGoalValue();
        await driver.pause(1000);
        await dashboard.clickNextButton();
    });
    it('Setting a goal - Workout sessions | User saves the goal / MOV-712', async () => {
        await dashboard.verifyingSuccessWorkoutScreen();
        await driver.pause(1000);
        await dashboard.clickGotItButton();
    });
});