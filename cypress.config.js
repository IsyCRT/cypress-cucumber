
const { defineConfig } = require("cypress");
const cucumber= require ('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  env:{
    url:"https://the-internet.herokuapp.com/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: [ 'cypress/e2e/tests/*.cy.js', "cypress/e2e/cucumber/feature/*.feature" ],
     // "baseUrl": "",
  },
});



