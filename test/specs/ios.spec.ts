import WelcomeScreen from '../screenobjects/WelcomeScreen'
// import $ from "webdriverio/build/commands/browser/$"

describe('Welcome screen', () => {
    it('Veryfing header',  () => {
      WelcomeScreen.evieText();
      expect(WelcomeScreen.evieText()).toExist()
  
    });
});