const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here   
      require('cypress-mochawesome-reporter/plugin')(on);
    },
     //Studio ist ab CY_version 10.7.0 
    experimentalStudio: true,
    experimentalRunAllSpecs: false,
    baseUrl: 'https://testcenter.iqb.hu-berlin.de'
  },
});
