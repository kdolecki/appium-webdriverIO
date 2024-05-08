import myBodyScreen from '../page_objects/myBodyScreen';
import myJournal from '../page_objects/myJournal';
import settingsScreen from '../page_objects/settingsScreen';
// import { assertIsDisplayed } from '../page_objects/basePage';
import login from '../page_objects/login';
import { resetAppState, waitForElementNotDisplayed, scrollingDown, scrollingUp } from './appHelpers.js';


describe('Menstrual health survey', () => {
    // afterEach(async function () {
    //     if (this.currentTest.state === 'failed') {
    //         throw new Error('Test case failed')
    //     }
    // })
        it('Log in', async () => {
        await login.loginToApp();
    });
    it('Go to My body tab and Menstrual cycle section', async () => {
        await myJournal.clickOnMyBodyTab();
        await driver.pause(1000);
        await scrollingDown();
        await myJournal.verifyingMenstrualCycleTile();
        await driver.pause(1000);
        await myJournal.clickOnJournalButton();
    });
    it('Menstrual overview / Movano-387', async () => {
        await scrollingDown();
        await myJournal.verifyingJournalMainScreen();
        await myJournal.checkingNoTrackingModal();
    });
    it('Start menstrual health survey', async () => {
        await myJournal.startingMenstrualHealthSurvey();
        await myJournal.verifyingInitialJournalScreen();
        await myJournal.clickOnNextBtn();
    })
    it('What is the average length of your cycle? / Movano-334', async () => {
        await myJournal.verifyingAverageCycleLengthScreen();
        await myJournal.checkingValuesOnAverageCycleLengthScreen();
        await myJournal.settingValueOnAverageCycleLengthScreen();
        await myJournal.clickOnNextBtn();
    });
    it('What is the average length of your period? / Movano-573', async () => {
        await myJournal.verifyingAveragePeriodLengthQuestionScreen();
        await myJournal.checkingValuesOnAveragePeriodLengthScreen();
        await myJournal.settingValueOnAveragePeriodLengthScreen();
        await myJournal.clickOnNextBtn();
    })
    it('When did your last period start? / Movano-340', async () => {
        await myJournal.verifyingLastPeriodLengthQuestionScreen();
        await myJournal.settingValueOnPeriodStartScreen();
        await myJournal.clickOnSaveBtn();
    })
});