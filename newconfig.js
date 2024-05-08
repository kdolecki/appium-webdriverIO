const { config } = require('./wdio.conf');
config.runner = 'local';
// PROCESS.ENV.PLATFORM = 'IOS';

config.suites = {
    TestsAfterSignIn: [
        './test/signUpAndSignIn.js',
        // './test/journal.js',
        // './test/settings.js',
        // './test/myBody_Activity.js'
    ],
    testsAfterSignUp: [
        './test/signUp.js',
        './test/onboarding.js'
    ]
}
config.capabilities = [{
    "appium:platformName": "iOS",
    "appium:platformVersion": "16.2",
    "appium:deviceName": "iPhone 14 Pro",
    "appium:automationName": "XCUITest",
    "appium:appium:bundleId": "com.movano.ios.debug",
    "appium:newCommandTimeout": 3600,
    "appium:connectHardwareKeyboard": true,
    "appium:autoGrantPermissions": true,
    // "appium:fullReset": true
}]

exports.config = config