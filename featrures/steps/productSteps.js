const {
  Before,
  Given,
  When,
  Then,
  After,
  setDefaultTimeout,
} = require("cucumber");

const chrome = require("chromedriver");
const assert = require("assert");
const { Builder, By, until } = require("selenium-webdriver");
setDefaultTimeout(100 * 1000);

Before({ timeout: 60 * 1000 }, async function () {
  this.driver = new Builder().forBrowser("chrome").build();
});

Given("User navigate to {string}", async function (url) {
  //setDefaultTimeout(100 * 1000);
  await this.driver.get(url);
});

When("User landed on the page", async function () {
  console.log(" When command is executed");
});

Then("User successfully landed on the page", async function () {
  console.log("Then command is executed");
});

When("we request the products list", async function () {
  this.driver.wait(until.elementLocated(By.tagName("h1")));

  await this.driver.get("http://localhost:4200");
});

Then("we should receive", async function (dataTable) {
  var productElements = await this.driver.findElements(By.className("product"));
  var expectations = dataTable.hashes();
  for (let i = 0; i < expectations.length; i++) {
    const productName = await productElements[i]
      .findElement(By.tagName("h3"))
      .getText();
    assert.equal(productName, expectations[i].name);

    const description = await productElements[i]
      .findElement(By.tagName("p"))
      .getText();
    assert.equal(description, `Description: ${expectations[i].description}`);
  }
});

After(async function () {
  this.driver.close();
});
