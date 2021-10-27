//To test login feature with correct email, but incorrect password

describe('login feature test', function() 
{
    it('test correct email but incorrect password', function() 
    
    {
      
    //Will select a DB value = demonew

      cy.visit('https://uhh.achievewithoutborders.com/web?db=demonew')
      
      cy.get('[name="db"]')
      .select('demonew')
      .should('have.value','demonew')

    //Fill out email address with a correct value
    
      cy.get('[name="login"]').type('testemployee@achievewithoutborders.com')
      .should('have.value','testemployee@achievewithoutborders.com')

    //Fill out password field with an incorrect password

      cy.get('[name="password"]')
      .type('2bWzj35x34q020p!!')
      .should('have.value','2bWzj35x34q020p!!')

    //Clicks login

      cy.get('[class="btn btn-primary"]').click()

    //Will display an alert message "Wrong login/password"

      cy.get('[class="alert alert-danger"]')
      .should('have.text','\n                        Wrong login/password\n                    ')
      
    })
})