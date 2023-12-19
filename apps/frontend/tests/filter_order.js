const { configure } = require('@testing-library/react');
const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');

async function testRemoveFromCart() {
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
    await driver.get('https://lastcall-1d57c.web.app/seller/orders');

    await driver.wait(until.elementLocated(By.css('[aria-labelledby="filter-status"]')), 20000);
    await driver.findElement(By.css('[aria-labelledby="filter-status"]')).click();
    await driver.wait(until.elementLocated(By.xpath('//li[text()="Delivered"]')), 10000);
    await driver.findElement(By.xpath('//li[text()="Delivered"]')).click();

    console.log("Test uspešno zaključen.")

  } catch (e) {
    console.error(e);
  }
}

testRemoveFromCart();