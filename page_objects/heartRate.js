import { expect as chaiExpect } from 'chai';
import { assert as chaiAssert } from 'chai';
import { should as chaiShould } from 'chai';

const myBodyHeader = '(//XCUIElementTypeStaticText[@name="My body"])[1]';
const heartRateIcon = '~heartRate';
const heartRateText = '~Heart Rate';
const noHeartRateText = '~No heart rate saved within the last 6 hours.';
const heartRateEmptyValues = '~--bpm';
const heartRateBPMText = '~bpm';

class heartRate {
    async verifyingHeartRateEmptyState() {
        chaiExpect(await $(heartRateText).getText()).to.be.equal('Heart Rate');
        chaiExpect(await $(noHeartRateText).getText()).to.be.equal('No heart rate saved within the last 6 hours.');
        chaiExpect(await $(heartRateEmptyValues).getText()).to.be.equal('--bpm');
    }
}
export default new heartRate
