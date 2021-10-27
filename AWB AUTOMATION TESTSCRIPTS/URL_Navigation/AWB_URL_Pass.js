//The test scripts should navigate to https://uhh.achievewithoutborders.com/web?db=demonew
//With "Pass" Result
describe('Navigate', function() 
{
    it('Navigate to AWB website', function() 
    
    {
      
      cy.visit('https://uhh.achievewithoutborders.com/web/login')
      cy.title().should('eq', 'Odoo')

    })
  })