import { expect as chaiExpect } from 'chai';
import { assert as chaiAssert } from 'chai';
import { should as chaiShould } from 'chai';

const dashboardHeader = '~Dashboard';
const workoutIcon = '~workoutSmallGoal';
const stepsIcon = `(//XCUIElementTypeImage[@name="stepsSmallGoal"])[1]`;
const activeMinIcon = '~activeMinSmallGoal';
const sleepIcon = '~sleepSmallGoal';
const journalLogsIcon = '~journalSmallGoal';
const topCircleIcon = '~topCircle';
const bottomCircleIcon = '~bottomCircle';
const goalsHeader = '~Goals';
const setAGoalbutton = '~Set a goal';
const noGoalSetText = '~Setting goals helps build healthy habits.';
const setAGoalHeader = '//XCUIElementTypeStaticText[@name="Set a goal"]';
const stepsTile = '~I want to walk more';
const sleepTile = '~I want quality sleep';
const journalTile = '~I want to track my mood';
const activeMinTile = '~I want to move more';
const workoutTile = '~I want to be more active';
const stepsSubheaderText = `~What's your weekly steps goal?`
const stepsGoalRecommendationText = `~We recommend a minimum of 42,000 steps per week to stay healthy.`
const stepsLeftNativePicker = `//XCUIElementTypeApplication[@name="Evie Beta Debug"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypePicker[1]/XCUIElementTypePickerWheel`;
const stepsRightNativePicker = `//XCUIElementTypeApplication[@name="Evie Beta Debug"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypePicker[2]/XCUIElementTypePickerWheel`;
const stepsBottomText = `~Steps per week`;
const nextButton = `~Next`;
const xButton = `~crossButton`;
const stepsDetails = `(//XCUIElementTypeStaticText[@name="Steps"])[2]`;
const sleepDetails = `(//XCUIElementTypeStaticText[@name="Sleep"])[2]`;
const activeMinDetails = `(//XCUIElementTypeStaticText[@name="Active minutes"])[2]`;
const journalDetails = `~Journal log(s)`;
const workoutsDetails = `~Workout(s)`;
const oneGoalSetText = `~Great start! You've set 1 goal.\nYou can set 2 more.`;
const sleepSubheaderText = `~How long would you like to sleep each day?`;
const sleepGoalRecommendationText = `~We recommend a minimum of  8h to stay healthy.`;
const sleepLeftNativePicker = `//XCUIElementTypeApplication[@name="Evie Beta Debug"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypePicker[2]/XCUIElementTypePickerWheel`;
const sleepRightNativePicker = `//XCUIElementTypeApplication[@name="Evie Beta Debug"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypePicker[2]/XCUIElementTypePickerWheel`;
const sleepBottomText = `~Sleep per day`;
const twoGoalsSetText = `~Well done! You've set 2 goals.\nYou can set 1 more.`;
const journalSubheaderText = `~How often would you like to log your moods / symptoms?`
const journalGoalRecommendationText = `~We recommend at least 2 logs per week...but more frequent logs will provide a more accurate picture of your physical & emotional health trends over time!`;
const journalNativePicker = `//XCUIElementTypeApplication[@name="Evie Beta Debug"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypePicker/XCUIElementTypePickerWheel`;
const journalBottomText = `~Journal log(s) per week`;
const threeGoalsSetText = `~You’ve reached the 3 goal limit.\nTo keep focus & motivation high, Evie has a 3 goal limit. To add a new goal,  deactivate one of your current goals first.`;
const activeMinSubheaderText = `~How many active minutes would you like to reach per week?`;
const activeMinGoalRecommendationText = `~We recommend a minimum of 150 active minutes per week to stay healthy.`;
const activeMinNativePicker = `//XCUIElementTypeApplication[@name="Evie Beta Debug"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypePicker/XCUIElementTypePickerWheel`;
const activeMinBottomText = `~Active minutes per week`;
const workoutSubheaderText = `~How many workout sessions would you like to plan per week?`;
const workoutGoalRecommendationText = `~We recommend working out at least once a week.`;
const workoutNativePicker = `//XCUIElementTypeApplication[@name="Evie Beta Debug"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypePicker/XCUIElementTypePickerWheel`;
const workoutBottomText = `~Workout(s) per week`;
const successStepsIcon = `~goal-set-steps`;
const successSleepIcon = `~goal-set-sleep`;
const successJournalIcon = `~goal-set-symptoms`;
const successActiveMinIcon = `~goal-set-active-min`;
const successWorkoutIcon = `~goal-set-active-min`;
const startDateText = `~Start date:`;
const gotItButton = `~Got it`;
const deactivatingBtn = `~Deactivate goal`;
const confirmDeactivatingBtn = `~Yes, deactivate goal`;
const cancelBtn = `~Cancel`;
const goalDeactivatedBanner = `~Goal deactivated`;

class dashboard {
    async verifyingEmptyDashboardScreen() {
        await $(topCircleIcon).isDisplayed();
        await $(bottomCircleIcon).isDisplayed();
        await driver.execute('mobile: scroll', { direction: "down" });
        chaiExpect(await $(noGoalSetText).getText()).to.be.equal(`Setting goals helps build healthy habits.`);
        await $(setAGoalbutton).isDisplayed();
    }
    async verifyingDashboardScreenAfter1GoalSet() {
        await $(topCircleIcon).isDisplayed();
        await $(bottomCircleIcon).isDisplayed();
        // chaiExpect(await $(dashboardHeader).getText()).to.be.equal('Dashboard');
        await driver.execute('mobile: scroll', { direction: "down" });
        chaiExpect(await $(oneGoalSetText).getText()).to.contain(`Great start! You've set 1 goal.\nYou can set 2 more.`);
        await $(setAGoalbutton).isDisplayed();
    }
    async verifyingDashboardScreenAfter2GoalsSet() {
        await $(topCircleIcon).isDisplayed();
        await $(bottomCircleIcon).isDisplayed();
        await driver.execute('mobile: scroll', { direction: "down" });
        chaiExpect(await $(twoGoalsSetText).getText()).to.be.equal(`Well done! You've set 2 goals.\nYou can set 1 more.`);
        await $(setAGoalbutton).isDisplayed();
    }
    async verifyingDashboardScreenAfter3GoalsSet() {
        await $(topCircleIcon).isDisplayed();
        await $(bottomCircleIcon).isDisplayed();
        await driver.execute('mobile: scroll', { direction: "down" });
        chaiExpect(await $(threeGoalsSetText).getText()).to.be.equal(`You’ve reached the 3 goal limit.\nTo keep focus & motivation high, Evie has a 3 goal limit. To add a new goal,  deactivate one of your current goals first.`);
        await $(setAGoalbutton).isDisplayed();
    }
    async verifyingAllGoalsScreen() {
        chaiExpect(await $(setAGoalHeader).getText()).to.be.equal('Set a goal');
        chaiExpect(await $(stepsTile).getText()).to.contain('I want to walk more');
        chaiExpect(await $(sleepTile).getText()).to.contain('I want quality sleep');
        chaiExpect(await $(journalTile).getText()).to.contain('I want to track my mood');
        chaiExpect(await $(activeMinTile).getText()).to.contain('I want to move more');
        chaiExpect(await $(workoutTile).getText()).to.contain('I want to be more active');
    }
    async clickNextButton() {
        await $(nextButton).click();
    }
    async clickGotItButton() {
        await $(gotItButton).click();
    }
    async clickOnXButton() {
        await $(xButton).click();
    }
    async clickOnSetAGoalButton() {
        await (await $(setAGoalbutton)).click();
    }
    async verifyingSettingStepsGoalScreen() {
        await driver.execute('mobile: scroll', { direction: "down" });
        await $(setAGoalbutton).click();
        chaiExpect(await $(stepsTile).getText()).to.contain('I want to walk more');
        await $(stepsTile).click();
        chaiExpect(await $(setAGoalHeader).getText()).to.be.equal('Set a goal');
        chaiExpect(await $(stepsSubheaderText).getText()).to.be.equal(`What's your weekly steps goal?`);
        chaiExpect(await $(stepsGoalRecommendationText).getText()).to.be.equal(`We recommend a minimum of 42,000 steps per week to stay healthy.`);
        chaiExpect(await $(stepsBottomText).getText()).to.contain(`Steps per week`);
    }
    async settingStepsGoalValue() {
        await $(stepsRightNativePicker).click();
        await $(stepsRightNativePicker).setValue(500);
        await $(stepsLeftNativePicker).click();
        await $(stepsLeftNativePicker).setValue(41);
    }
    async verifyingSettingSleepGoalScreen() {
        await driver.execute('mobile: scroll', { direction: "down" });
        await $(setAGoalbutton).click();
        chaiExpect(await $(sleepTile).getText()).to.contain('I want quality sleep');
        await $(sleepTile).click();
        chaiExpect(await $(setAGoalHeader).getText()).to.be.equal('Set a goal');
        chaiExpect(await $(sleepSubheaderText).getText()).to.be.equal(`How long would you like to sleep each day?`);
        chaiExpect(await $(sleepGoalRecommendationText).getText()).to.be.equal(`We recommend a minimum of  8h to stay healthy.`);
        chaiExpect(await $(sleepBottomText).getText()).to.contain(`Sleep per day`);
    }
    async settingSleepGoalValue() {
        await $(sleepLeftNativePicker).click();
        await $(sleepLeftNativePicker).setValue(7);
        await $(sleepRightNativePicker).click();
        await $(sleepRightNativePicker).setValue(10);
    }
    async verifyingSettingJournalGoalScreen() {
        await driver.execute('mobile: scroll', { direction: "down" });
        await $(setAGoalbutton).click();
        chaiExpect(await $(journalTile).getText()).to.contain('I want to track my mood');
        await $(journalTile).click();
        chaiExpect(await $(setAGoalHeader).getText()).to.be.equal('Set a goal');
        chaiExpect(await $(journalSubheaderText).getText()).to.be.equal(`How often would you like to log your moods / symptoms?`);
        chaiExpect(await $(journalGoalRecommendationText).getText()).to.be.equal(`We recommend at least 2 logs per week...but more frequent logs will provide a more accurate picture of your physical & emotional health trends over time!`);
        chaiExpect(await $(journalBottomText).getText()).to.contain(`Journal log(s) per week`);
    }
    async settingJournalGoalValue() {
        await $(journalNativePicker).click();
        await $(journalNativePicker).setValue(7);
    }
    async verifyingActiveMinGoalScreen() {
        await driver.execute('mobile: scroll', { direction: "down" });
        await $(setAGoalbutton).click();
        chaiExpect(await $(activeMinTile).getText()).to.contain('I want to move more');
        await $(activeMinTile).click();
        chaiExpect(await $(setAGoalHeader).getText()).to.be.equal('Set a goal');
        chaiExpect(await $(activeMinSubheaderText).getText()).to.be.equal(`How many active minutes would you like to reach per week?`);
        chaiExpect(await $(activeMinGoalRecommendationText).getText()).to.be.equal(`We recommend a minimum of 150 active minutes per week to stay healthy.`);
        chaiExpect(await $(activeMinBottomText).getText()).to.contain(`Active minutes per week`);
    }
    async settingActiveMinGoalValue() {
        await $(activeMinNativePicker).click();
        await $(activeMinNativePicker).setValue(210);
    }
    async verifyingSettingWorkoutGoalScreen() {
        await driver.execute('mobile: scroll', { direction: "down" });
        await $(setAGoalbutton).click();
        chaiExpect(await $(workoutTile).getText()).to.contain('I want to be more active');
        await $(workoutTile).click();
        chaiExpect(await $(setAGoalHeader).getText()).to.be.equal('Set a goal');
        chaiExpect(await $(workoutSubheaderText).getText()).to.be.equal(`How many workout sessions would you like to plan per week?`);
        chaiExpect(await $(workoutGoalRecommendationText).getText()).to.be.equal(`We recommend working out at least once a week.`);
        chaiExpect(await $(workoutBottomText).getText()).to.contain(`Workout(s) per week`);
    }
    async settingWorkoutGoalValue() {
        await $(workoutNativePicker).click();
        await $(workoutNativePicker).setValue(7);
    }
    async verifyingSuccessStepsScreen() {
        // chaiExpect(await $(setAGoalHeader).getText()).to.be.equal('Set a goal');
        chaiExpect(await $(successStepsIcon).isDisplayed());
        chaiExpect(await $(startDateText).getText()).to.be.equal(`Start date:`);
    }
    async verifyingSuccessSleepScreen() {
        // chaiExpect(await $(setAGoalHeader).getText()).to.be.equal('Set a goal');
        chaiExpect(await $(successSleepIcon).isDisplayed());
        chaiExpect(await $(startDateText).getText()).to.be.equal(`Start date:`);
    }
    async verifyingSuccessJournalScreen() {
        // chaiExpect(await $(setAGoalHeader).getText()).to.be.equal('Set a goal');
        chaiExpect(await $(successJournalIcon).isDisplayed());
        chaiExpect(await $(startDateText).getText()).to.be.equal(`Start date:`);
    }
    async verifyingSuccessWorkoutScreen() {
        // chaiExpect(await $(setAGoalHeader).getText()).to.be.equal('Set a goal');
        chaiExpect(await $(successWorkoutIcon).isDisplayed());
        chaiExpect(await $(startDateText).getText()).to.be.equal(`Start date:`);
    }
    async verifyingSuccessActiveMinScreen() {
        // chaiExpect(await $(setAGoalHeader).getText()).to.be.equal('Set a goal');
        chaiExpect(await $(successActiveMinIcon).isDisplayed());
        chaiExpect(await $(startDateText).getText()).to.be.equal(`Start date:`);
    }
    //deactivating goals
    async moveToStepDetails() {
        await $(stepsDetails).click();
    }
    async moveToSleepDetails() {
        await $(sleepDetails).click();
    }
    async moveToActiveMinDetails() {
        await $(activeMinDetails).click();
    }
    async moveToJournalDetails() {
        await $(journalDetails).click();
    }
    async moveToWorkoutsDetails() {
        await $(workoutsDetails).click();
    }
    async deactivatingGoal() {
        await $(deactivatingBtn).click();
        await $(confirmDeactivatingBtn).click();
    }
    async checkingGoalDeactivatedBanner() {
        await $(goalDeactivatedBanner).isDisplayed();
    }
}
export default new dashboard
