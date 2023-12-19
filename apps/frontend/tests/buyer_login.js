const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');

async function testSignIn() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://lastcall-1d57c.web.app/buy/signin');

    // write valid mail address and password
    let email = "somebody@gmail.com";
    let password = "password";

    await driver.findElement(By.xpath('//input[@placeholder="Enter email"]')).sendKeys(email);

    await driver.findElement(By.xpath('//input[@placeholder="Enter password"]')).sendKeys(password);

    await driver.findElement(By.css('button[type="submit"]')).click();

    await driver.wait(until.urlIs('https://lastcall-1d57c.web.app/'), 10000);

    console.log('Test prijava kupca je uspešno zaključen.');
  } catch (e) {
    console.error(e);
  }
}

testSignIn();