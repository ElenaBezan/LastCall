const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');

async function testDeleteDiscount() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://lastcall-1d57c.web.app/sell/signin');

    //ne pozabi dat notri pravih podatkov
    let email = "elena.bezan@gmail.com";
    let password = "123456";

    await driver.findElement(By.xpath('//input[@placeholder="Enter email"]')).sendKeys(email);
    await driver.findElement(By.xpath('//input[@placeholder="Enter password"]')).sendKeys(password);
    await driver.findElement(By.css('button[type="submit"]')).click();
    await driver.wait(until.urlIs('https://lastcall-1d57c.web.app/seller'), 10000);

    console.log("Uspešna prijava")
    await driver.get('https://lastcall-1d57c.web.app/seller/sales');

    await driver.wait(until.elementsLocated(By.css('.PrivateSwitchBase-input')), 10000);
    const checkboxes = await driver.findElements(By.css('.PrivateSwitchBase-input'));
    for (const checkbox of checkboxes) {
      await checkbox.click();
    }


    await driver.wait(until.elementLocated(By.css('[placeholder="Enter discount percent"]')), 10000);
    const discountInput = await driver.findElement(By.css('[placeholder="Enter discount percent"]'));
    await discountInput.sendKeys('30');


    await driver.wait(until.elementLocated(By.css('.MuiButton-containedPrimary')), 10000);
    const addSaleButton = await driver.findElement(By.css('.MuiButton-containedPrimary'));
    await addSaleButton.click();

    console.log("Test uspešno zaključen.");
    
  } catch (e) {
    console.error(e);
  }
}

testDeleteDiscount();