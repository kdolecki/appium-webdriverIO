import login from '../page_objects/login'


describe('Login', () => {
    it('Log in', async () => {
        await login.loginToApp();

    });
    it('Logout', async () => {
        await login.logout();
        // await driver.activateApp('com.movano.ios.debug');
    })
});