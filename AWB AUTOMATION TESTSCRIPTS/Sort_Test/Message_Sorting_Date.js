//To test sort function
//Email should be sorted via Date Received

describe('login feature test', function() 
{
    it('test correct email and correct password', function() 
    
    {
      
      cy.visit('https://uhh.achievewithoutborders.com/web?db=demonew')
      
      cy.get('[name="db"]')
      .select('demonew')
      .should('have.value','demonew')
    
      cy.get('[name="login"]').type('testemployee@achievewithoutborders.com')
      .should('have.value','testemployee@achievewithoutborders.com')

      cy.get('[name="password"]')
      .type('2bWzj35x34q020p')
      .should('have.value','2bWzj35x34q020p')

    //Should be redirected to "https://uhh.achievewithoutborders.com/web/login"

      cy.get('[class="btn btn-primary"]').click()

    //Should navigate to the inbox menu
    //Should see email messages
       
    cy.get('[class="oe_mail"]')
    .then(items => {
      const unsortedItems = items.map((index, html) => Cypress.$(html).text()).get();
      const sortedItems = unsortedItems.slice().sort();
      expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
    });
    
       
    })
})