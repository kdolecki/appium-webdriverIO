# movano-automated-tests

Appium config for launching test on iOS devices using webdriverio.

Requirements: 
1. Node.js 14+
2. NPM version >= 8 (NPM is usually bundled with Node.js, but can be upgraded independently)
3. JavaJDK

Installation:
1. 'npm install -g appium@next' / https://appium.github.io/appium/docs/en/2.0/quickstart/install/
2. 'npm install -g appium-doctor' 
3. download and install appium-inspector from https://github.com/appium/appium-inspector
4. clone the repo in your directory and run 'npm install'
5. go to directory -> npm init wdio
6. to verify your installation run 'appium-doctor --ios'

Before run:
1. Add your app to /webdriverio-appium/app 
2. Change your capabilities in wdio.conf.js
3. Plug in your device or run tests on Browserstack using 'npm run browserstack'

Run:
'npm run test'
