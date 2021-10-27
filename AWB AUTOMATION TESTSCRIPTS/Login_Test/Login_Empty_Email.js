//To test login feature with empty email address

describe('login feature test', function() 
{
    it('test empty email', function() 
    
    {
      
    //Will select a DB value = demonew

      cy.visit('https://uhh.achievewithoutborders.com/web?db=demonew')
      
      cy.get('[name="db"]')
      .select('demonew')
      .should('have.value','demonew')

    //Display "Please fill out this field" if email address is empty

      cy.get('[class="btn btn-primary"]').click()
      cy.get('[name="login"]')
      .should('have.value','')
      
      
  
    })
  })