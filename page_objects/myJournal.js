import { expect as chaiExpect } from 'chai';
import { assert as chaiAssert } from 'chai';
import { should as chaiShould } from 'chai';
import myBodyScreen from './myBodyScreen';

const menstrualCycleHeader = '~Menstrual cycle';
const menstrualCycleText = '~Log your last period so we can help you track your menstrual cycle!';
const journalBtn = '~Go to Journal';
const journalHeader = '(//XCUIElementTypeStaticText[@name="Journal"])[1]';
const journalScreenText = '~Log your last period so we can help you track your menstrual cycle!';
const startTrackingPeriodBtn = '~Start tracking your period';
const dontTrackPeriodBtn = `~I don't want to track period(s)`;
const stopTrackingPeriodModalHeader = '~Stop tracking period?';
const stopTrackingPeriodModalText = `~When you disable this feature, you won’t be able to log your period or see period predictions. You can always turn it on again in Settings.`;
const stopTrackingModalBtn = '~Yes, stop tracking';
const saveBtn = '~Save';
const cancelBtn = '~Cancel';
const initialJournalScreenHeader = `~Just a couple details before we start`;
const initialJournalScreenSubheader = `~The menstrual health feature is not intended for contraceptive or other medical purposes. By continuing you understand this feature is only to be used to monitor or track certain symptoms.`;
const averageCycleLengthQuestionHeader = `~What's the average length of your cycle?`;
const averageCycleLengthQuestionText = '~This information helps us adjust our insights and predictions to suit your personal needs.'
const averageCycleLengthQuestionNativePicker = '//XCUIElementTypeApplication[@name="Evie Beta Debug"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypePicker/XCUIElementTypePickerWheel'
const idkBtn = `~I don't know`;
const nextBtn = '~Next';
const averagePeriodLengthQuestionHeader = `~What's the average length of your period?`;
const averagePeriodLengthQuestionText = `~This information helps us adjust our insights and predictions to suit your personal needs.`;
const averagePeriodLengthQuestionNativePicker = '//XCUIElementTypeApplication[@name="Evie Beta Debug"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypePicker/XCUIElementTypePickerWheel';
const lastPeriodQuestionHeader = '~When did your last period start?';
const lastPeriodQuestionText = '~This information helps us adjust our insights and predictions to suit your personal needs.';
const lastPeriodMonthPicker = `//XCUIElementTypeApplication[@name="Evie Beta Debug"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeDatePicker/XCUIElementTypePicker/XCUIElementTypePickerWheel[1]`;
const lastPeriodDayPicker = `//XCUIElementTypeApplication[@name="Evie Beta Debug"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeDatePicker/XCUIElementTypePicker/XCUIElementTypePickerWheel[2]`;
const lastPeriodYearPicker = `//XCUIElementTypeApplication[@name="Evie Beta Debug"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeDatePicker/XCUIElementTypePicker/XCUIElementTypePickerWheel[3]`;
const backBtn = '~backButton';
const myBodyTab = '~mybody';


class myJournal {
    async verifyingMenstrualCycleTile() {
        chaiExpect(await $(menstrualCycleText).getText()).to.be.equal('Log your last period so we can help you track your menstrual cycle!');
        chaiExpect(await $(menstrualCycleHeader).getText()).to.be.equal('Menstrual cycle');
    }
    async verifyingJournalMainScreen() {
        chaiExpect(await $(journalScreenText).getText()).to.be.equal('Log your last period so we can help you track your menstrual cycle!');
        chaiExpect(await $(journalHeader).getText()).to.be.equal('Journal');
        await $(startTrackingPeriodBtn).isDisplayed();
        await $(dontTrackPeriodBtn).isDisplayed();
    }
    async checkingNoTrackingModal() {
        await $(dontTrackPeriodBtn).click();
        chaiExpect(await $(stopTrackingPeriodModalHeader).getText()).to.be.equal('Stop tracking period?');
        chaiExpect(await $(stopTrackingPeriodModalText).getText()).to.be.equal(`When you disable this feature, you won’t be able to log your period or see period predictions. You can always turn it on again in Settings.`);
        await $(cancelBtn).click();
    }
    async startingMenstrualHealthSurvey() {
        await $(startTrackingPeriodBtn).click();
    }
    async clickOnJournalButton() {
        await $(journalBtn).click();
    }
    async clickOnSaveBtn() {
        await $(saveBtn).click();
    }
    async clickOnNextBtn() {
        await $(nextBtn).click();
    }
    async clickOnMyBodyTab() {
        await $(myBodyTab).click();
    }
    async verifyingAverageCycleLengthScreen() {
        chaiExpect(await $(averageCycleLengthQuestionHeader).getText()).to.be.equal(`What's the average length of your cycle?`);
        chaiExpect(await $(averageCycleLengthQuestionText).getText()).to.be.equal(`This information helps us adjust our insights and predictions to suit your personal needs.`);
    }
    async checkingValuesOnAverageCycleLengthScreen() {
        const averageCycleLengthQuestionPicker = await $(averageCycleLengthQuestionNativePicker);
        await averageCycleLengthQuestionPicker.setValue('20');
        await driver.pause(2000);
        await averageCycleLengthQuestionPicker.setValue('40');
    }
    async settingValueOnAverageCycleLengthScreen() {
        const averageCycleLengthQuestionPicker = await $(averageCycleLengthQuestionNativePicker);
        await averageCycleLengthQuestionPicker.setValue('28');
    }
    async verifyingAveragePeriodLengthQuestionScreen() {
        chaiExpect(await $(averagePeriodLengthQuestionHeader).getText()).to.be.equal(`What's the average length of your period?`);
        chaiExpect(await $(averagePeriodLengthQuestionText).getText()).to.be.equal(`This information helps us adjust our insights and predictions to suit your personal needs.`);
    }
    async checkingValuesOnAveragePeriodLengthScreen() {
        const averagePeriodLengthQuestionPicker = await $(averagePeriodLengthQuestionNativePicker);
        await averagePeriodLengthQuestionPicker.setValue('1');
        await driver.pause(2000);
        await averagePeriodLengthQuestionPicker.setValue('10');
    }
    async settingValueOnAveragePeriodLengthScreen() {
        const averagePeriodLengthQuestionPicker = await $(averagePeriodLengthQuestionNativePicker);
        await averagePeriodLengthQuestionPicker.setValue('5');
    }
    async verifyingLastPeriodLengthQuestionScreen() {
        chaiExpect(await $(lastPeriodQuestionHeader).getText()).to.be.equal(`When did your last period start?`);
        chaiExpect(await $(lastPeriodQuestionText).getText()).to.be.equal(`This information helps us adjust our insights and predictions to suit your personal needs.`);
    }
    async settingValueOnPeriodStartScreen() {
        const lastPeriodMonthNativePicker = await $(lastPeriodMonthPicker);
        await lastPeriodMonthNativePicker.setValue('May');
        const lastPeriodDayNativePicker = await $(lastPeriodDayPicker);
        await lastPeriodDayNativePicker.setValue('20');
        const lastPeriodYearNativePicker = await $(lastPeriodYearPicker);
        await lastPeriodYearNativePicker.setValue('2022');
    }
    async verifyingInitialJournalScreen() {
        chaiExpect(await $(initialJournalScreenHeader).getText()).to.be.equal(`Just a couple details before we start`);
        chaiExpect(await $(initialJournalScreenSubheader).getText()).to.be.equal(`The menstrual health feature is not intended for contraceptive or other medical purposes. By continuing you understand this feature is only to be used to monitor or track certain symptoms.`);
    }
}


export default new myJournal