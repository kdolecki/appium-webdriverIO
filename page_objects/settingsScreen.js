import { expect as chaiExpect } from 'chai';
import { assert as chaiAssert } from 'chai';
import { should as chaiShould } from 'chai';

const backButton = '~backButton'
// import { assertIsDisplayed } from '../basePage';

class settingsScreen {
    get myAccountBar() {
        return $('//XCUIElementTypeButton[@name="My account"]');
    }
    get myProfileBar() {
        return $('//XCUIElementTypeButton[@name="My profile"]');
    }
    get pairYourRingBar() {
        return $('//XCUIElementTypeStaticText[@name="Pair your ring"]');
    }
    get contactUsBar() {
        return $('//XCUIElementTypeButton[@name="Contact us"]');
    }
    get tosBar() {
        return $('//XCUIElementTypeStaticText[@name="Terms of Service"]');
    }
    get privacyPolicyBar() {
        return $('//XCUIElementTypeStaticText[@name="Privacy Policy"]');
    }
    get followUsBar() {
        return $('//XCUIElementTypeStaticText[@name="Follow us on Instagram"]');
    }
    get logoutBar() {
        return $('-ios class chain:**/XCUIElementTypeStaticText[`label == "Log out"`]');
    }
    get deleteAccountBar() {
        return $('//XCUIElementTypeButton[@name="Delete account"]');
    }
    get personalSection() {
        return $('~Personal');
    }
    get myDeviceSection() {
        return $('~My device');
    }
    get aboutSection() {
        return $('~About the app');
    }
    get findUsSection() {
        return $('~Find us online');
    }
    get settings() {
        return $('~settings');
    }
    get myAccountHeader() {
        return $('~My account');
    }
    get registeredWithText() {
        return $('~Registered with:');
    }
    get myProfileHeader() {
        return $('~My profile');
    }
    get saveBtn() {
        return $('~Save');
    }
    get nameText() {
        return $('~Name (This will not be public)');
    }
    get surnameText() {
        return $('~Surname (This will not be public)');
    }
    get nicknameText() {
        return $('~Nickname (Public in Comments and Challenges)');
    }
    get genderBar() {
        return $('~Gender');
    }
    get birthdayBar() {
        return $('~Birthday');
    }
    get heightBar() {
        return $('~Height');
    }
    get weightBar() {
        return $('~Weight');
    }
    get bedtimeBar() {
        return $('~Bedtime');
    }
    get waketimeBar() {
        return $('~Wake time');
    }
    get insightsBar() {
        return $('//XCUIElementTypeStaticText[@name="What I want to work on:"]');
    }
    get logoutBtn() {
        return $('(//XCUIElementTypeButton[@name="Log out"])[2]');
    }
    get howDoYouIdentifyHeader() {
        return $('~How do you identify?')
    }
    get selectYourDateOfBirthHeader() {
        return $('~Select your date of birth')
    }
    get selectYourDateOfBirthSubheader() {
        return $('~We use this data to adjust our insights and predictions better.')
    }
    get selectYourHeight() {
        return $('~Select your height')
    }
    get selectYourWeight() {
        return $('~Select your weight')
    }
    get bedTimeHeader() {
        return $('~What time do you usually go to bed?')
    }
    get wakeTimeHeader() {
        return $('~What time do you usually wake up?')
    }
    get womanBtn() {
        return $('~Female');
    }
    get manBtn() {
        return $('~Male');
    }
    get otherBtn() {
        return $('~Other');
    }
    get submitBtn() {
        return $('~Submit');
    }
    get cancelBtn() {
        return $('~Cancel');
    }
    get genderManBar() {
        return $('~Gender, Man');
    }
    get genderWomanBar() {
        return $('~Gender, Woman');
    }
    get menstrualCycle() {
        return $('//XCUIElementTypeStaticText[@name="Menstrual cycle"]')
    }
    get menstrualCycleHeader() {
        return $('~Menstrual cycle')
    }
    get menstrualCycleSwitch() {
        return $('//XCUIElementTypeSwitch[@name="Tracking period"]/XCUIElementTypeSwitch')
    }
    get menstrualCycleText() {
        return $('~Period tracking is on. This allows you to log your period, learn more about your menstrual cycle, and receive period predictions.')
    }
    get termsOfService() {
        return $('//XCUIElementTypeButton[@name="Terms of Service"]')
    }
    get getToSText() {
        return $(`~These Terms of Use (“Terms”) are a legal agreement between you and Movano Inc. (“Movano Inc.” or
            “us” or “we” or “our”) that governs your use of our websites (located at Movano.com,
            Movanodiabetes.com, Movanoglucose.com, Movanohealth.com, Movanoheart.com, Movanosleep.com,
            Eviering.com) and any related website or services provided by Movano Inc. (collectively, the “Services”).
            The words “user,” “you,” and “your” refer to entities or individuals that access or use the Services. These
            Terms do not alter in any way the terms or conditions of any other agreement you may have with us. If
            you are using the Services on behalf of an entity, you represent and warrant that you are authorized to
            accept these Terms on such entity’s behalf.`)
    }
    get getPrivacyPolicy() {
        return $(`~Movano Inc. PRIVACY POLICY
        Effective Date: May 1, 2021
        Updated: December 16, 2022
        This privacy policy (“Privacy Policy”) describes the privacy practices that Movano Inc. (“[COMPANY]” or
        “us” or “we” or “our”) follows when collecting and using information about you from our websites
        (located at located at MOVANO.com, Movanodiabetes.com, Movanoglucose.com, Movanohealth.com,
        Movanoheart.com, Movanosleep.com, Eviering.com) (our “Sites”) and any related services operated or
        provided by Movano Inc. (the “Services”).
        Please read this Privacy Policy before using the Services. It describes what information we gather from
        you and others who visit or use the Services, how we use that information, and what we do to protect it.
        When you access or use the Services, certain information, including personally identifiable information,
        may be collected, transferred, processed, stored, and in certain circumstances, disclosed as described in
        this Privacy Policy. BY USING THE SERVICES, YOU EXPRESSLY CONSENT TO THESE INFORMATION
        HANDLING PRACTICES.
        This Privacy Policy complies with the California Consumer Privacy Act of 2018 (“CCPA”) and any terms
        defined in the CCPA have the same meaning when used in this Privacy Policy. Capitalized terms used but
        not defined in this Privacy Policy have the definitions provided in our Terms of Use (located at
        Movano.com) (the “Terms of Use”). Parts of the Terms of Use affect this Privacy Policy, so unless you have
        already done so, please review the Terms of Use prior to using the Sites.
        Where noted in this Privacy Policy, the CCPA temporarily exempts personal information reflecting a
        written or verbal business-to-business communication (“B2B Personal Information”) from some its
        requirements.
        BY CREATING AN ACCOUNT ON OUR SITES OR OTHERWISE PROVIDING US WITH YOURS OR OTHERS’
        PERSONAL INFORMATION, YOU EXPRESSLY CONSENT TO THE INFORMATION HANDLING PRACTICES
        DESCRIBED IN THIS PRIVACY POLICY AND YOU ACKNOWLEDGE AND CONFIRM THAT YOU HAVE
        PERMISSION TO PROVIDE US WITH ALL PERSONAL INFORMATION PROVIDED. IF YOU DO NOT AGREE WITH
        THIS PRIVACY POLICY OR THE TERMS OF USE, PLEASE DO NOT ACCESS, USE, OR REGISTER FOR AN
        ACCOUNT ON THE SITES.
        You may download a printable copy of this Privacy Policy at Movano.com.`)
    }
    async returnToSettings() {
        await $(backButton).click();
    }
    // async verifyingHeader () {
    //     await assertIsDisplayed(this.genderManBar)
    // }
}
export default new settingsScreen
