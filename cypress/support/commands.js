// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (user, pass) => { 
    cy.visit('https://the-internet.herokuapp.com/') //base url - que debria estar en el archivo de configuracion
    cy.request({
        method:'POST',
        url : '/authenticate',
        form: true,
        body:{
            username: user,
            password: pass,
        }
    })
    //falta validar el status
   cy.getCookie('rack.session').should('exist')
   cy.visit('https://the-internet.herokuapp.com/secure')
})

//comando padre
Cypress.Commands.add('login', () => { 
   // cy.visit('https://the-internet.herokuapp.com/') //puedo configurar una base url -o una env
    cy.request({
        method:'POST',
        url : '/authenticate',
        form: true,
        body:{
            username: 'tomsmith',
            password: 'SuperSecretPassword!',
        }
    })
   cy.getCookie('rack.session').should('exist')
   cy.visit('https://the-internet.herokuapp.com/secure')
})

Cypress.Commands.add('conduitLogin', (user, pass) => { 
    //cy.visit('https://react-redux.realworld.io/') 
   // cy.contains('Sign in').click()
   cy.get('input[placeholder="Email"]').type(user); 
   cy.get('input[placeholder="Password"]').type(pass);
   cy.get('button[type="submit"]').click();
})

//comando child para manejar iframe
Cypress.Commands.add('iframe', { prevSubject: 'element'}, ($iframe, selector) => { //encadenado a un elemento, le paso los parametros el id del iframe y el selector que quiero encontrar dentro
    Cypress.log({
        name: 'iframe',
        consoleProps(){
            return{
                iframe: $iframe,
            } 
        }
    })
    return new Cypress.Promise(resolve=>{
        resolve($iframe.contents().find(selector))
    })
 })

 //Para hacer que una ventana se abra en la misma ventana, sino tiene el atributo target
 Cypress.Commands.add('visitInSameTab', (url) => { 
    Cypress.on('windows:before:load', (win)=> {
        cy.stub(win, 'open').as('windowOpen').callsFake(()=>{ //en vez de open, llama a la misma ventana
            cy.visit(url)
        })
    })

 })
