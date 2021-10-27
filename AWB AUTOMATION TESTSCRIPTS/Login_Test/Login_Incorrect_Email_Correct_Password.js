//To test login feature with incorrect email, but correct password

describe('login feature test', function() 
{
    it('test incorrect email but correct password', function() 
    
    {
      
    //Will select a DB value = demonew

      cy.visit('https://uhh.achievewithoutborders.com/web?db=demonew')
      
      cy.get('[name="db"]')
      .select('demonew')
      .should('have.value','demonew')

    //Fill out email address with incorrect value
    
      cy.get('[name="login"]').type('suriaga70@gmail.com')
      .should('have.value','suriaga70@gmail.com')

    //Fill out password field with the correct password

      cy.get('[name="password"]')
      .type('2bWzj35x34q020p')
      .should('have.value','2bWzj35x34q020p')

    //Clicks login

      cy.get('[class="btn btn-primary"]').click()

    //Will display an alert message for Wrong login/password

      cy.get('[class="alert alert-danger"]')
      .should('have.text','\n                        Wrong login/password\n                    ')
      
    })
})