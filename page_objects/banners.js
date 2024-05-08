import { expect as chaiExpect } from 'chai';
import { assert as chaiAssert } from 'chai';
import { should as chaiShould } from 'chai';

const noRingPairedHeader = '~No ring paired';
const noRingPairedText = '~Please pair your ring to start tracking data.';
const noRingPairedBtn = '~Let’s do it!';

class banners {
    async verifyingNoRingPairedBanner() {
        chaiExpect(await $(noRingPairedHeader).getText()).to.be.equal('No ring paired');
        chaiExpect(await $(noRingPairedText).getText()).to.be.equal('Please pair your ring to start tracking data.');
        chaiExpect(await $(noRingPairedBtn).getText()).to.be.equal('Let’s do it!');
    }
}
export default new banners