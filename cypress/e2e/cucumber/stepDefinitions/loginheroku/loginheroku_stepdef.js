import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginHeroku from '../../../../Pages/LoginHeroku';
const loginheroku = new LoginHeroku;

Given('User login from main page', () => {
     loginheroku.navigateToLogin();
});

Then(/^The login has been successful$/, () => {
	cy.get('.subheader').should('include.text', 'Welcome to the Secure Area')
});

When('User login with valid credentials', () => {
	cy.readFile('cypress/fixtures/herokuData.json').then((credentials) => {
		loginheroku.enterUser(credentials.user);
	 	loginheroku.enterPassword(credentials.password);
   })
   loginheroku.clickSingInButton();
})
