import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
Cypress.on('uncaught:exception', (err, runnable) => {return false;});
 
beforeEach(function(){
   //
}) 
 
Given('User is on the login page', () => {
	cy.visit('https://react-redux.realworld.io/');
    //cy.get('a[href="#logins"]').click();
    cy.contains('Sign in').click()
});

When('User click on the settings button', () => {
	cy.get('a[href="#settings"]').click();
});

When('User click on the logout button', () => {
    cy.get('.btn.btn-outline-danger').click();
});

Then('User should be routed back to login page', () => {
    cy.title().should('eq', 'Conduit');
});

When('User login with valid credentials from fixture', () => {
    cy.readFile('cypress/fixtures/ConduitData.json').then((credentials) => {
        cy.conduitLogin(credentials.email, credentials.password);
   })
})

//No usar nunca para datos sensibles como estos, pero es para que se viera el uso del dataTable
When('User login with valid credentials conduit', (dataTable) => {
    cy.get('input[placeholder="Email"]').type(dataTable.rawTable[1][0]); 
    cy.get('input[placeholder="Password"]').type(dataTable.rawTable[1][1]);
    cy.get('button[type="submit"]').click();
})


