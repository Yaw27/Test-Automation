//To test login feature with empty password, but with email address

describe('login feature test', function() 
{
    it('test empty password', function() 
    
    {
      
    //Will select a DB value = demonew

      cy.visit('https://uhh.achievewithoutborders.com/web?db=demonew')
      
      cy.get('[name="db"]')
      .select('demonew')
      .should('have.value','demonew')

    //Fill out email address
    
      cy.get('[name="login"]')
      .type('testemployee@achievewithoutborders.com')
      .should('have.value','testemployee@achievewithoutborders.com')

    //Empty Password field
    //Display "Please fill out this field" if email address is empty = Pass
      
      cy.get('[name="password"]')
      .should('have.value','')
      cy.get('[class="btn btn-primary"]').click()
      
    })
})