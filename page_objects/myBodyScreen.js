import { expect as chaiExpect } from 'chai';
import { assert as chaiAssert } from 'chai';
import { should as chaiShould } from 'chai';
import heartRate from './heartRate';

const myBodyHeader = '(//XCUIElementTypeStaticText[@name="My body"])[1]';
const todayTab = '~today';
const activeMinTab = '~Active min';
const emptyStateDetailsScreenText = '~No data.\nWear your ring regularly, so we can monitor your progress!';
const yourActiveTimeHeader = '~Your active time';
const zeroActiveMinValue = '~0min';
const yourStepsHeader = '~Your steps';
const zeroStepsValue = '~0 steps';
const caloriesHeader = '~Calories';
const yourBurnedCaloriesHeader = '~Your burned calories';
const heartRateEmptyState = '~No heart rate saved within the last 6 hours.'
const heartRateHeader = '~Heart rate';
const dayTab = '~Day';
const weekTab = '~Week';
const monthTab = '~Month';
const stepsTab = '~Steps';
const caloriesTab = '~Cal';
const noActivityTodayText = '~No activity\ntoday';
const noActivityYesterdayText = '~No activity\nyesterday';
const noStepsTodayText = '~No steps today';
const noStepsYesterdayText = '~No steps yesterday';
const noCalTodayText = '(//XCUIElementTypeStaticText[@name="Today"])[1]';
const noCalYesterdayText = '~Yesterday';
const backButton = '~backButton';
const myBodyTab = '~mybody';

class myBodyScreen {
    async verifyingMyBodyHeader() {
        await $(myBodyHeader).isExisting();
    }
    async clickOnMyBodyTab() {
        await $(myBodyTab).click();
    }
    async clickOnTodayMainTab() {
        await $(todayTab).click();
    }
    async clickOnActiveMinTab() {
        await $(activeMinTab).click();
    }
    async clickOnStepsTab() {
        await $(stepsTab).click();
    }
    async clickOnTopOfStepsBtn() {
        const stepsElement = await $(stepsTab);
        const location = await stepsElement.getLocation();
        const size = await stepsElement.getSize();

        // calculating the coordinates of the top point of the element
        const topX = location.x;
        const topY = location.y;

        await browser.touchAction({
            action: 'tap',
            x: topX + 5, // adding a small value to avoid the edge
            y: topY + 5,
        });
    }
    async clickOnCaloriesTab() {
        const calElement = await $(caloriesTab);
        const location = await calElement.getLocation();
        const size = await calElement.getSize();

        // calculating the coordinates of the top point of the element
        const topX = location.x;
        const topY = location.y;

        await browser.touchAction({
            action: 'tap',
            x: topX + 5, // adding a small value to avoid the edge
            y: topY + 5,
        });
    }
    async clickOnBackBtn() {
        await $(backButton).click();
    }
    // verifying No Activity Today and Yesterday
    async verifyingActiveMinEmptyState() {
        chaiExpect(await $(noActivityYesterdayText).getText()).to.equal('No activity\nyesterday');
        chaiExpect(await $(noActivityTodayText).getText()).to.equal('No activity\ntoday');
    }

    async verifyingStepsEmptyState() {
        chaiExpect(await $(noStepsYesterdayText).getText()).to.equal('No steps yesterday');
        chaiExpect(await $(noStepsTodayText).getText()).to.equal('No steps today');
    }
    async verifyingCaloriesEmptyState() {
        chaiExpect(await $(noCalYesterdayText).getText()).to.not.equal('No burned cal.\nyesterday');
        chaiExpect(await $(noCalTodayText).getText()).to.not.equal('No burned cal.\ntoday');
    }
    async moveToActiveMinDetails() {
        await $(activeMinTab).click();
    }
    async verifyingActiveMinEmptyDetailsScreen() {
        chaiExpect(await $(activeMinTab).getText()).to.equal('Active min');
        chaiExpect(await $(emptyStateDetailsScreenText).getText()).to.equal('No data.\nWear your ring regularly, so we can monitor your progress!');
        chaiExpect(await $(yourActiveTimeHeader).getText()).to.equal('Your active time');
        chaiExpect(await $(zeroActiveMinValue).getText()).to.equal('0min');
    }
    async clickOnWeekTab() {
        const weekElement = await $(weekTab);
        const location = await weekElement.getLocation();
        const size = await weekElement.getSize();

        // calculating the coordinates of the top point of the element
        const topX = location.x;
        const topY = location.y;

        await browser.touchAction({
            action: 'tap',
            x: topX + 5, // adding a small value to avoid the edge
            y: topY + 5,
        });
    }
    async clickOnMonthTab() {
        const monthElement = await $(monthTab);
        const location = await monthElement.getLocation();
        const size = await monthElement.getSize();

        // calculating the coordinates of the top point of the element
        const topX = location.x;
        const topY = location.y;

        await browser.touchAction({
            action: 'tap',
            x: topX + 5, // adding a small value to avoid the edge
            y: topY + 5,
        });
    }
    async moveToStepsDetails() {
        await $(stepsTab).click();
    }
    async verifyingStepsEmptyDetailsScreen() {
        chaiExpect(await $(stepsTab).getText()).to.equal('Steps');
        chaiExpect(await $(emptyStateDetailsScreenText).getText()).to.equal('No data.\nWear your ring regularly, so we can monitor your progress!');
        chaiExpect(await $(yourStepsHeader).getText()).to.equal('Your steps');
        chaiExpect(await $(zeroStepsValue).getText()).to.equal('0 steps');
    }
    // async verifyingCaloriesEmptyDetailsScreen() {
    //     chaiExpect(await $(caloriesTab).getText()).to.equal('Calories');
    //     chaiExpect(await $(emptyStateDetailsScreenText).getText()).to.equal('No data.\nWear your ring regularly, so we can monitor your progress!');
    //     chaiExpect(await $(yourBurnedCaloriesHeader).getText()).to.equal('Your burned calories');
    //     chaiExpect(await $(zeroStepsValue).getText()).to.equal('0steps');
    // }
    async moveToCaloriesDetails() {
        await $(caloriesTab).click();
    }
    async moveToHRDetails() {
        await $(heartRateEmptyState).click();
    }
    async verifyingHREmptyDetailsScreen() {
        chaiExpect(await $(heartRateHeader).getText()).to.equal('Heart rate');
        chaiExpect(await $(emptyStateDetailsScreenText).getText()).to.equal('No data.\nWear your ring regularly, so we can monitor your progress!');
    }
    get settings() {
        return $('~navbar-settings');
    }
}
export default new myBodyScreen
