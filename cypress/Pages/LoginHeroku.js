class LoginHeroku {

  navigateToLogin(){
    cy.visit('https://the-internet.herokuapp.com/');
    cy.contains('Form Authentication').click();
  }

 //Locator
   getUsername(){
    return cy.get('#username');
   }

   getPassword(){
    return cy.get('#password');
   }

   getSignin(){
    return cy.get('.fa.fa-2x.fa-sign-in');
   }

 //Aciones
    clickSingInButton(){
        return this.getSignin().click();
    }
    
    enterUser(user){
       return this.getUsername().type(user);
    }

    enterPassword(pass){
        return this.getPassword().type(pass);
    }
 
}
export default LoginHeroku