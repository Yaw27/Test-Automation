//To test login feature with incorrect email and incorrect password

describe('login feature test', function() 
{
    it('test incorrect email and password', function() 
    
    {
      
    //Will select a DB value = demonew

      cy.visit('https://uhh.achievewithoutborders.com/web?db=demonew')
      
      cy.get('[name="db"]')
      .select('demonew')
      .should('have.value','demonew')

    //Fill out email address with incorrect value
    
      cy.get('[name="login"]').type('suriaga70@gmail.com')
      .should('have.value','suriaga70@gmail.com')

    //Fill out password field with incorrect value
      
      cy.get('[name="password"]')
      .type('testpassword')
      .should('have.value','testpassword')

    //Clicks Login

      cy.get('[class="btn btn-primary"]').click()

    //Will display an alert message for Wrong login/password

      cy.get('[class="alert alert-danger"]')
      .should('have.text','\n                        Wrong login/password\n                    ')
      
    })
})