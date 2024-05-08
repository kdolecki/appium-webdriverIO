
import login from '../page_objects/login';

describe('Generate data', () => {
    async function openSafariWithDeepLink(deepLink) {
        // Appium will handle the driver initialization for Safari

        // Open Safari
        await browser.url('movanoapp://scheme=debug');

        await driver.pause(2000); // Adjust the pause duration as needed

        // Press Enter or Go to navigate to the deep link
        await driver.keys(['Enter']);
        // You can add code here to confirm the choice in Safari if needed
        // For example, clicking on an "Open" button

        // Wait for a moment to allow the app to launch
        await driver.pause(5000);
    }
    before(async () => {
        await openSafariWithDeepLink('movanoapp://scheme=debug');
        it('Log in', async () => {
            await driver.init(safariCaps);
            // await driver.executeScript('mobile: launchApp', { bundleId: 'com.movano.ios.debug' });

            // Continue with your existing test logic
            await login.loginMockUser();
        });
    });
});