const webdriver = require("selenium-webdriver");
const chrome = require("chromedriver");

const start = async (browser) => {
  let driver = await myBrowser.getDriver(browser);
  await driver.get("https://www.youtube.com");

  driver.quit();
};

const myBrowser = {
  getDriver: async function (browser) {
    return await new webdriver.Builder().forBrowser(browser).build();
  },
};

start("chrome");
