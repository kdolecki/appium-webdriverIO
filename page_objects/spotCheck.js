import { expect as chaiExpect } from 'chai';
import { assert as chaiAssert } from 'chai';
import { should as chaiShould } from 'chai';

const spotCheckIcon = '~spotcheck';
const spotCheckText = '~Spot check';
const noSpotCheckText = '~Spot checks give you live\nHR and Sp02 readings';
const spotCheckBtn = '~Do a spot check';
const spotCheckNoRingText = '~Make sure your ring is charged and connected, and data sync is finished.';

class spotCheck {
    async verifyingSpotCheckEmptyState() {
        await driver.waitUntil(async () => {
            const element = await driver.$(noSpotCheckText);
            return element.isDisplayed();
        }, 5000, 'Element noSpotCheckText not visible after 5s');

        let element = await driver.$(noSpotCheckText);
        await driver.execute('mobile: scroll', { element: element.elementId, toVisible: true });
        chaiExpect(await $(spotCheckText).getText()).to.be.equal('Spot check');
        chaiExpect(await $(spotCheckNoRingText).getText()).to.be.equal('Make sure your ring is charged and connected, and data sync is finished.');
        chaiExpect(await $(noSpotCheckText).getText()).to.be.equal('Spot checks give you live HR and Sp02 readings');
    }
}
export default new spotCheck
