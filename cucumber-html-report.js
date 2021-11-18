const reporter = require('cucumber-html-reporter');
const options = {

    theme: 'bootstrap',

    jsonFile: 'cypress/cucumber-json/workdayLogin.cucumber.json',

    output: './cucumber_reports/cucumber-htmlreport.html',

    reportSuiteAsScenarios: true,

    scenarioTimestamp: true,

    launchReport: true,
    
    metadata: {
        "Browser": "Chrome",
        "Platform": "Windows 10",

    },
};

reporter.generate(options);