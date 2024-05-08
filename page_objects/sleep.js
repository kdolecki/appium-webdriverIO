import { expect as chaiExpect } from 'chai';
import { assert as chaiAssert } from 'chai';
import { should as chaiShould } from 'chai';

const yourSleepText = '~Your sleep';
const sleepDurationText = '~Total sleep';
const sleepDurationEmptyValues = '~0h 0m';
const sleepDurationEmptyText = '~There’s no data logged. Wear your ring to bed tonight so Evie can start logging sleep data for you.';
const sleepingZonesText = '~Sleeping zones';
const sleepingZonesNoDataText = '~No data from last night';
const sleepingZonesAwakeText = '~Awake';
const sleepingZonesREMText = '~REM';
const sleepingZonesLightText = '~Light';
const sleepingZonesDeepText = '~Deep';
const yourSleepVitalsText = '~Your sleep vitals';
const rhrAverageText = '~RHR average';
const rhrEmptyValue = '~--bpm';
const hrvAverageText = '~HRV average';
const hrvEmptyValue = '~--ms';
const spo2averageText = '~SpO2 average';
const spo2EmptyValue = '~--%';
const respirationAverageText = '~Respiration rate avg.';
const respirationEmptyValue = '~--rpm';
const skinTempAverageValueText = '~Skin temp. var. avg.';
const skinTempEmptyValue = `~Wear your ring two\nnights in a row to see\nyour data.`;

class sleep {
    async verifyingYourSleepEmptyState() {
        chaiExpect(await $(yourSleepText).getText()).to.be.equal('Your sleep');
        chaiExpect(await $(sleepDurationText).getText()).to.be.equal('Total sleep');
        chaiExpect(await $(sleepDurationEmptyValues).getText()).to.be.equal('0h 0m');
        chaiExpect(await $(sleepingZonesText).getText()).to.be.equal('Sleeping zones');
        chaiExpect(await $(sleepingZonesNoDataText).getText()).to.be.equal('No data from last night');
        chaiExpect(await $(sleepingZonesAwakeText).getText()).to.be.equal('Awake');
        chaiExpect(await $(sleepingZonesREMText).getText()).to.be.equal('REM');
        chaiExpect(await $(sleepingZonesLightText).getText()).to.be.equal('Light');
        chaiExpect(await $(sleepingZonesDeepText).getText()).to.be.equal('Deep');
    }
    async verifyingYourSleepVitalsEmptyState() {
        chaiExpect(await $(yourSleepVitalsText).getText()).to.be.equal('Your sleep vitals');
        chaiExpect(await $(rhrAverageText).getText()).to.be.equal('RHR average');
        chaiExpect(await $(rhrEmptyValue).getText()).to.be.equal('--bpm');
        chaiExpect(await $(hrvAverageText).getText()).to.be.equal('HRV average');
        chaiExpect(await $(hrvEmptyValue).getText()).to.be.equal('--ms');
        chaiExpect(await $(spo2averageText).getText()).to.be.equal('SpO2 average');
        chaiExpect(await $(spo2EmptyValue).getText()).to.be.equal('--%');
        chaiExpect(await $(respirationAverageText).getText()).to.be.equal('Respiration rate avg.');
        chaiExpect(await $(respirationEmptyValue).getText()).to.be.equal('--rpm');
        chaiExpect(await $(skinTempAverageValueText).getText()).to.be.equal('Skin temp. var. avg.');
        chaiExpect(await $(skinTempEmptyValue).getText()).to.be.equal('Wear your ring two\nnights in a row to see\nyour data.');
    }
}
export default new sleep
