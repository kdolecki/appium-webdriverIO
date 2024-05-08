import { secrets } from './secrets';

exports.config = {
    user: secrets.BROWSERSTACK_USERNAME || 'YOUR_USERNAME',
    key: secrets.BROWSERSTACK_ACCESS_KEY || 'YOUR_ACCESS_KEY',
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          app: 'bs://87eafc700b9185192b0c6505a6e4abef0d881b51', // change for your app
          browserstackLocal: true
        },
      ]
    ],
    capabilities: [{
      'bstack:options': {
        deviceName: 'iPhone 11 Pro Max',
        platformVersion: '16',
        platformName: 'ios',
      }
    // }, {
      // 'bstack:options': {
      //   deviceName: 'Google Pixel 7 Pro',
      //   platformVersion: '13.0',
      //   platformName: 'android',
      // } }, {
    }],
    commonCapabilities: {
      'bstack:options': {
        projectName: "BrowserStack M",
        buildName: 'browserstack build',
        sessionName: 'BStack parallel webdriverio-appium',
        debug: true,
        networkLogs: true
      }
    },
    maxInstances: 10}