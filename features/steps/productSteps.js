const {
  Before,
  Given,
  When,
  Then,
  After,
  setDefaultTimeout,
  Status,
} = require("cucumber");

const chrome = require("chromedriver");
const assert = require("assert");
const { Builder, By, until } = require("selenium-webdriver");
const chalk = require("chalk");

setDefaultTimeout(100 * 1000);

Before(async function () {
  this.driver = new Builder().forBrowser("chrome").build();
  console.log(
    "\n" +
      chalk.blue.bgWhite.bold("TESTING: ") +
      chalk.white.bgBlack.bold(" console.log() should not break the report")
  );
});

When("User navigate to {string}", async function (url) {
  console.log(`User navigate to {url} command is executed`);
  await this.driver.get(url);
});

When("User landed on the page", async function () {
  console.log(" When User landed on the page command is executed");
});

Then("User successfully landed on the page", async function () {
  console.log("Then User successfully landed on the page command is executed");
});

Then("Page element {string} is displayed", async function (element) {
  await this.driver.wait(until.elementLocated(By.id(element)), 10000);
  await this.driver.findElement(By.id(element));
  await this.driver.takeScreenshot(true);
});

After(async function (testCase) {
  if (testCase.result.status === Status.FAILED) {
    console.log("================FAILED=============");
    this.driver.takeScreenshot(true);
  }
  if (testCase.result.status === Status.PASSED) {
    console.log("================PASSED=============");
  }

  this.driver.close();
});
