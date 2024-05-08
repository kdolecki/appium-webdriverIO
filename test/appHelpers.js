import { browser } from 'webdriverio';
import { simpleParser } from 'mailparser';
const Imap = require('imap');
const systemAlertButton = '**/XCUIElementTypeButton[`label == "Deny"`]';

async function handleSystemAlert() {
  const alertExists = await driver.elementExists(systemAlertButton);

  if (alertExists) {
    const alertButton = await driver.$(systemAlertButton);
    await alertButton.click();
  }
};
async function scrollingDown() {
  await driver.execute('mobile: scroll', { direction: "down" });
};
async function scrollingUp() {
  await driver.execute('mobile: scroll', { direction: "up" });
};
async function resetAppState() {
  await driver.closeApp();
  await driver.launchApp();
  // await driver.terminateApp('com.movano.ios.debug');
  // await driver.activateApp();
}

// Function to generate a random string
function generateRandomString(length) {
  return Math.random().toString(20).substring(2, length + 2);
}

// Function to create an email
function createRandomEmail() {
  return `kamil.dolecki+1${generateRandomString(6)}@withintent.com`;
}
function createRandomAutomationEmail() {
  return `automation+1${generateRandomString(6)}@withintent.com`;
}
// Function to create a password
function createRandomPassword() {
  return `Eloelo${generateRandomString(5)}!`;
}

async function waitForElementNotDisplayed(selector, timeout = 10000) {
  const isElementDisplayed = async () => {
    try {
      return (await $(selector)).isDisplayed();
    } catch (error) {
      // Element is not present
      return false;
    }
  };
  const endTime = Date.now() + timeout;

  while (true) {
    if (!await isElementDisplayed()) {
      break;
    }
    if (Date.now() > endTime) {
      throw new Error(`Element '${selector}' is still displayed after waiting for ${timeout}ms.`);
    }
    await driver.pause(100);
  }
}

async function getVerificationCodeFromEmail(email, password) {
  const imap = new Imap({
    user: email,
    password: password,
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    authtype: 'PLAIN',
    tlsOptions: { rejectUnauthorized: false },
    debug: console.log,
  });

  return new Promise((resolve, reject) => {
    imap.once('ready', () => {
      imap.openBox('INBOX', false, (err, box) => {
        if (err) {
          reject(err);
          imap.end();
        }

        const searchCriteria = ['UNSEEN'];
        const fetchOptions = { bodies: ['TEXT'], markSeen: true };

        imap.search(searchCriteria, (err, results) => {
          if (err) {
            reject(err);
            imap.end();
          } else if (!results || results.length === 0) {
            reject(new Error('No unread email found.'));
            imap.end();
          } else {
            const f = imap.fetch(results, fetchOptions);

            f.on('message', (msg) => {
              msg.on('body', async (stream) => {
                const parsed = await simpleParser(stream);
                const codeMatch = parsed.text.match(/(\d{6})/);
                if (codeMatch) {
                  const code = codeMatch[0];
                  resolve(code);
                  imap.end();
                }
              });

              msg.once('end', () => {
                // no execution addFlags()
              });
            });

            f.once('error', (err) => {
              reject(err);
              imap.end();
            });

            f.once('end', () => {
              imap.addFlags(results, ['\\Seen'], (err) => {
                if (err) {
                  console.log('Error marking messages as read', err);
                }
                imap.end();
              });
            });

            setTimeout(() => {
              reject(new Error("Timeout: Failed to find verification email."));
              imap.end();
            }, 5000);
          }
        });
      });
    });

    imap.once('error', (err) => {
      reject(err);
    });

    imap.connect();
  });
}

export { resetAppState, getVerificationCodeFromEmail, waitForElementNotDisplayed, handleSystemAlert, scrollingDown, scrollingUp, createRandomEmail, createRandomAutomationEmail, createRandomPassword };