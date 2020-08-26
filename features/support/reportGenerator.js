var reporter = require("cucumber-html-reporter");

var options = {
  theme: "bootstrap",
  name: "Starhub Web",
  brandTitle: "Automated Functional Test Report",
  storeScreenshots: true,
  scenarioTimestamp: true,
  jsonFile: "features/reports/test.json",
  output: "features/reports/cucumber_report.html",
  screenshotsDirectory: "features/screenshots/",
  noInlineScreenshots: true,
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    "App Version": "0.3.2",
    "Test Environment": "STAGING",
    Browser: "Chrome  54.0.2840.98",
    Platform: "Windows 10",
    Parallel: "Scenarios",
    Executed: "Remote",
  },
};

reporter.generate(options);
