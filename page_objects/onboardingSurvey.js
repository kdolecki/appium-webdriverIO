import { expect as chaiExpect } from 'chai';
import { assert as chaiAssert } from 'chai';
import { should as chaiShould } from 'chai';

const successfulSignupText = '~You just created your new Evie account!'
const gotItBtn = '~Got it'
const introHeaderText = `~Welcome to Evie, \nyour health coach at hand`;
const introSubheaderText = `~Your journey to a healthier life 
starts here. To assist you in the best possible way, we have a few questions first...`;
const letsStartBtn = '~Let’s start';
const letsDoThisBtn = `~Let’s do this!`
const nextBtn = '~Next'
const nameHeader = '~What would you like to be called?';
const nameText = '~Name (this will not be public)';
const surnameText = '~Surname (this will not be public)';
const nicknameText = '~Nickname (public in comments and challenges)';
const nameInput = `-ios class chain:**/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeTextField[1]`;
const surnameInput = `-ios class chain:**/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeTextField[2]`;
const nicknameInput = `-ios class chain:**/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeTextField[3]`
const emptyAlert = '(//XCUIElementTypeStaticText[@label="Please fill out this field"])[1]';
const charAlert = '~Please use 2 or more characters';
const genderHeader = '~How do you identify yourself?';
const backBtn = '~backButton';
const femaleRadiobutton = '~Female';
const maleRadiobutton = '~Male';
const otherRadiobutton = '~Other';
const dateOfBirthHeader = '~Log your date of birth';
const dateOfBirthSubheader = '~We use this info to personalize the insights and predictions we share with you. Don’t worry! It’ll stay just between us.';
const dateOfBirthBottomText = '~You have to be at least 18 years old';
const monthPickerWheel = `(//XCUIElementTypePickerWheel)[1]`;
const dayPickerWheel = `(//XCUIElementTypePickerWheel)[2]`;
const yearPickerWheel = `(//XCUIElementTypePickerWheel)[3]`;
const heightHeader = '~Select your height';
const heightSubheader = '~We use these measurements to help us make\nmore accurate calculations for steps, calorie\nburn, and more.';
const heightBottomText = '~You can update this later in Settings';
// const feetPickerWheel = `-ios predicate string:value == "5'"`;
// const inchesPickerWheel = `-ios predicate string:value == "4''"`;

const feetPickerWheel = `-ios class chain:**/XCUIElementTypePickerWheel[1]`;
const inchesPickerWheel = `-ios class chain:**/XCUIElementTypePickerWheel[2]`;

const skipItBtn = '~Skip for now';
const heightDefaultValue = `5'4''`;
const weightHeader = '~Select your weight';
const weightSubheader = `//XCUIElementTypeStaticText[@name="Your weight doesn't tell the full story of your health, but it does play a vital role in helping us calculate calorie burn and so much more!"]`
const weightBottomText = '~You can update this later in Settings';
const poundsPickerWheel = `//XCUIElementTypeApplication[@name="Evie Beta"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypePicker/XCUIElementTypePickerWheel`;
const bedTimeHeader = '~What time do you usually go to bed?';
const bedTimeText = '~This helps us when personalizing your sleep quality insights and predictions.';
const hourPickerWheel = `//XCUIElementTypeApplication[@name="Evie Beta Debug"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeDatePicker/XCUIElementTypePicker/XCUIElementTypePickerWheel[1]`;
const minutePickerWheel = `//XCUIElementTypeApplication[@name="Evie Beta Debug"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeDatePicker/XCUIElementTypePicker/XCUIElementTypePickerWheel[2]`;
const ampmPickerWheel = `//XCUIElementTypeApplication[@name="Evie Beta Debug"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeDatePicker/XCUIElementTypePicker/XCUIElementTypePickerWheel[3]`;
const wakeTimeHeader = '~What time do you usually wake up?';
const wakeTimeText = '~This helps us when personalizing your sleep quality insights and predictions.';
const aspectsHeader = '~What aspect(s) of your well-being are you interested in?';
const aspectsSubheader = `~Let us know how we can support you!\nPlease select up to 3 topics.`
const aspectNo1 = '~Improving my sleep';
const aspectNo2 = '~Being more active';
const aspectNo3 = '~Tracking my moods';
const aspectNo4 = '~Learning about my cycle';
const aspectNo5 = '~Tracking my heart health';
const aspectSnackbar = '~Please select at least 1 topic';
const welcomeScreenHeader = `~You’re off to a great start!`;
const welcomeScreenTopSubheader = `~Now that we have the basics done, let’s get to the fun stuff…`;
const welcomeScreenBottomSubheader = `~Discover your metrics in My body, log & track health symptoms, and learn from the experts.`;
const trackingQuestion = '~If you have a menstrual cycle would you like to track it?';
const yesRadioBtn = '~Yes';
const noRadioBtn = '~No';
const notificationScreenHeader = `~Want to get the most from your Evie experience?`;
const notificationScreenText = `~We’d like to share inspiring insights and notifications to empower you on your health and well-being journey. You in?!`
const allowButton = `~Allow`;

class onboardingSurvey {
    async verifyingIntroScreen() {
        const introHeaderElement = await $(introHeaderText);
        const introSubheaderElement = await $(introSubheaderText);

        await introHeaderElement.waitForDisplayed();
        chaiExpect(await introHeaderElement.getText()).to.be.equal('Welcome to Evie, \nyour health coach at hand');

        await introSubheaderElement.waitForDisplayed();
        chaiExpect(await introSubheaderElement.getText()).to.be.equal(`Your journey to a healthier life \nstarts here. To assist you in the best possible way, we have a few questions first...`);
    }
    async clickOnLetsStartBtn() {
        await $(letsStartBtn).click();
    }
    async clickOnNextBtn() {
        const nextBtnElement = await $(nextBtn);
        await nextBtnElement.click();
    }
    async clickOnBackBtn() {
        await $(backBtn).click();
    }
    async verifyingNameHeader() {
        const nameHeaderElement = await $(nameHeader);
        chaiExpect(await nameHeaderElement.getText()).to.be.equal(`What would you like to be called?`);
    }
    async verifyingElementsOnNameScreen() {
        await $(nameText).isExisting();
        await $(surnameText).isExisting();
        await $(nicknameText).isExisting();
    }
    async fillingInInputs() {
        await $(nameInput).addValue('Test Name');
        await $(surnameInput).addValue('Test Surname');
        await $(nicknameInput).addValue('Test Nickname');
    }
    async verifyingEmptyAlert() {
        const emptyAlertElement = await $(emptyAlert);
        chaiExpect(await emptyAlertElement.getText()).to.be.equal(`Please fill out this field`);
    }
    async verifyingCharAlert() {
        const charAlertElement = await $(charAlert);
        chaiExpect(await charAlertElement.getText()).to.be.equal(`Please use 2 or more characters`);
    }
    async wrongFillingInInputs() {
        await $(nameInput).addValue('1');
    }
    async verifyingGenderScreen() {
        const genderHeaderElement = await $(genderHeader);
        await genderHeaderElement.waitForDisplayed();
        chaiExpect(await genderHeaderElement.getText()).to.be.equal('How do you identify yourself?');
        await $(femaleRadiobutton).isExisting();
        await $(maleRadiobutton).isExisting();
        await $(otherRadiobutton).isExisting();
    }
    async clickOnMaleRadiobutton() {
        await $(maleRadiobutton).click();
    }
    async verifyingMenstrualCycleTrackingScreen() {
        const trackingQuestionElement = await $(trackingQuestion);
        await trackingQuestionElement.waitForDisplayed();
        chaiExpect(await trackingQuestionElement.getText()).to.be.equal('If you have a menstrual cycle would you like to track it?');
    }
    async clickOnYesRadioBtn() {
        await $(yesRadioBtn).click();
    }
    async clickOnNoRadioBtn() {
        await $(noRadioBtn).click();
    }
    async verifyingDateOfBirthScreen() {
        const dateOfBirthHeaderElement = await $(dateOfBirthHeader);
        const dateOfBirthSubheaderElement = await $(dateOfBirthSubheader);
        const dateOfBirthBottomTextElement = await $(dateOfBirthBottomText);
        await dateOfBirthHeaderElement.waitForDisplayed();
        chaiExpect(await dateOfBirthHeaderElement.getText()).to.be.equal('Log your date of birth');
        await dateOfBirthSubheaderElement.waitForDisplayed();
        chaiExpect(await dateOfBirthSubheaderElement.getText()).to.be.equal('We use this info to personalize the insights and predictions we share with you. Don’t worry! It’ll stay just between us.');
        await dateOfBirthBottomTextElement.waitForDisplayed();
        chaiExpect(await dateOfBirthBottomTextElement.getText()).to.be.equal('You have to be at least 18 years old');
    }
    async loggingDateOfBirth() {
        const monthElement = await $(monthPickerWheel);
        const dayElement = await $(dayPickerWheel);
        const yearElement = await $(yearPickerWheel);
        await monthElement.setValue('January');
        await dayElement.setValue('1');
        await yearElement.setValue('1965');
    }
    async verifyingHeightScreen() {
        const heightHeaderElement = await $(heightHeader);
        const heightSubheaderElement = await $(heightSubheader);
        const heightBottomTextElement = await $(heightBottomText);
        await heightHeaderElement.waitForDisplayed();
        chaiExpect(await heightHeaderElement.getText()).to.be.equal('Select your height');
        await heightSubheaderElement.waitForDisplayed();
        chaiExpect(await heightSubheaderElement.getText()).to.be.equal('We use these measurements to help us make\nmore accurate calculations for steps, calorie\nburn, and more.');
        await heightBottomTextElement.waitForDisplayed();
        chaiExpect(await heightBottomTextElement.getText()).to.be.equal('You can update this later in Settings');
    }
    async verifyingDefaultHeight() {
        const heightDefaultElement = await $(`~${heightDefaultValue}`);
        await heightDefaultElement.waitForDisplayed();
        chaiExpect(await heightDefaultElement.getText()).to.be.equal(heightDefaultValue);
    }
    async settingUpHeight() {
        const meterElement = await $(feetPickerWheel);
        const centimeterElement = await $(inchesPickerWheel);
        await meterElement.setValue('6');
        await centimeterElement.setValue('1');
    }
    async verifyingWeightScreen() {
        const weightHeaderElement = await $(weightHeader);
        const weightSubheaderElement = await $(weightSubheader);
        const weightBottomTextElement = await $(weightBottomText);
        await weightHeaderElement.waitForDisplayed({ timeout: 5000 }); // Wait for up to 5 seconds
        chaiExpect(await weightHeaderElement.getText()).to.be.equal('Select your weight');
        await weightSubheaderElement.waitForDisplayed();
        // chaiExpect(await weightSubheaderElement.getText()).to.be.equal(`Your weight doesn't tell the full story of your\nhealth, but it does play a vital role in helping us\ncalculate calorie burn and so much more!`);
        await weightBottomTextElement.waitForDisplayed();
        chaiExpect(await weightBottomTextElement.getText()).to.be.equal('You can update this later in Settings');
    }
    async settingUpWeight() {
        const poundsElement = await $(poundsPickerWheel);
        await poundsElement.setValue('140');
        // await poundsElement.click();
    }
    async skipPairing() {
        await $(skipItBtn).click();
    }
    async verifyingBedTimeScreen() {
        const bedTimeHeaderElement = await $(bedTimeHeader);
        const bedTimeSubheaderElement = await $(bedTimeText);
        await bedTimeHeaderElement.waitForDisplayed({ timeout: 5000 }); // Wait for up to 5 seconds
        chaiExpect(await bedTimeHeaderElement.getText()).to.be.equal('What time do you usually go to bed?');
        await bedTimeSubheaderElement.waitForDisplayed();
        chaiExpect(await bedTimeSubheaderElement.getText()).to.be.equal(`This helps us when personalizing your sleep quality insights and predictions.`);
    }
    async settingUpBedTime() {
        const hourElement = await $(hourPickerWheel);
        await hourElement.setValue('9');
        driver.pause(2000);
        const minuteElement = await $(minutePickerWheel);
        await minuteElement.click();
        await minuteElement.setValue('55');
        driver.pause(2000);
        const ampmElement = await $(ampmPickerWheel);
        await ampmElement.click();
        await ampmElement.setValue('AM');
        driver.pause(2000);
    }
    async settingUpWakeTime() {
        const hourElement = await $(hourPickerWheel);
        await hourElement.setValue('7');
        driver.pause(2000);
        const minuteElement = await $(minutePickerWheel);
        await minuteElement.click();
        await minuteElement.setValue('50');
        driver.pause(2000);
        const ampmElement = await $(ampmPickerWheel);
        await ampmElement.click();
        await ampmElement.setValue('PM');
        driver.pause(2000);
    }
    async verifyingWakeTimeScreen() {
        const wakeTimeHeaderElement = await $(wakeTimeHeader);
        const wakeTimeSubheaderElement = await $(wakeTimeText);
        await wakeTimeHeaderElement.waitForDisplayed({ timeout: 5000 }); // Wait for up to 5 seconds
        chaiExpect(await wakeTimeHeaderElement.getText()).to.be.equal('What time do you usually wake up?');
        await wakeTimeSubheaderElement.waitForDisplayed();
        chaiExpect(await wakeTimeSubheaderElement.getText()).to.be.equal(`This helps us when personalizing your sleep quality insights and predictions.`);
    }
    async clickOnGotItBtn() {
        await $(gotItBtn).click();
    }
    async verifyingNeedsScreen() {
        const needsHeaderElement = await $(aspectsHeader);
        const needsSubheaderElement = await $(aspectsSubheader);
        await needsHeaderElement.waitForDisplayed({ timeout: 5000 }); // Wait for up to 5 seconds
        chaiExpect(await needsHeaderElement.getText()).to.be.equal('What aspect(s) of your well-being are you interested in?');
        await needsSubheaderElement.waitForDisplayed();
        chaiExpect(await needsSubheaderElement.getText()).to.be.equal(`Let us know how we can support you!\nPlease select up to 3 topics.`);
        const aspect1 = await $(aspectNo1);
        const aspect2 = await $(aspectNo2);
        const aspect3 = await $(aspectNo3);
        const aspect4 = await $(aspectNo4);
        const aspect5 = await $(aspectNo5);
        const bottomText = await $(heightBottomText);
        chaiExpect(await aspect1.getText()).to.be.equal(`Improving my sleep`);
        chaiExpect(await aspect2.getText()).to.be.equal(`Being more active`);
        chaiExpect(await aspect3.getText()).to.be.equal(`Tracking my moods`);
        chaiExpect(await aspect4.getText()).to.be.equal(`Learning about my cycle`);
        chaiExpect(await aspect5.getText()).to.be.equal(`Tracking my heart health`);
        chaiExpect(await bottomText.isExisting()).to.be.true;
    };
    async checkingAspectsSnackbar() {
        const snackbarElement = await $(aspectSnackbar)
        await snackbarElement.waitForDisplayed();
        chaiExpect(await snackbarElement.getText()).to.be.equal(`Please select at least 1 topic`)
    };
    async selectingAspects() {
        await $(aspectNo1).click();
        await $(aspectNo3).click();
        await $(aspectNo3).click();
    };
    async verifyingLastScreen() {
        driver.pause(2000);
        chaiExpect(await $(welcomeScreenHeader).getText()).to.be.equal(`You’re off to a great start!`);
        chaiExpect(await $(welcomeScreenTopSubheader).getText()).to.be.equal(`Now that we have the basics done, let’s get to the fun stuff…`);
        chaiExpect(await $(welcomeScreenBottomSubheader).getText()).to.be.equal(`Discover your metrics in My body, log & track health symptoms, and learn from the experts.`);
    };
    async clickOnLetsDoThisBtn() {
        await $(letsDoThisBtn).click();
    };
    async verifyingNotificationsScreen() {
        chaiExpect(await $(notificationScreenHeader).getText()).to.be.equal(`Want to get the most from your Evie experience?`);
        chaiExpect(await $(notificationScreenText).getText()).to.be.equal(`We’d like to share inspiring insights and notifications to empower you on your health and well-being journey. You in?!`);
    }
    async confirmNotifications() {
        await $(nextBtn).click();
        driver.pause(2000);
        await $(allowButton).click();

    }
}
export default new onboardingSurvey

