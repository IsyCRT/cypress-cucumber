///<reference types= 'cypress'/>  

describe ('Login', () => {

    beforeEach(function(){
        cy.fixture('herokuData').as('data')
    })

    it ('Auth call request', function() { //la clave esta en que tiene que ser function y no operador flecha
      //asi se llamana una variable de ambiente cy.visit(Cypress.env('url')+'/la otra parte de la dir')
       cy.visit(Cypress.env('url'))
       cy.login(this.data.user, this.data.password);

       Cypress.config('defaultCommandTimeout', 8000) 
       cy.get('.subheader').should('include.text', 'Welcome to the Secure Area')
    })
})