//To test sort function
//Names should be in Alphabetical order

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

    //Should click the messaging icon
    //Should display the users
       
       cy.get('[class="fa fa-comments-o"]')
       .command('click')
       .should('exist')
       .click()
       cy.get('[title="Display Instant Messaging"]')
       cy.get('[class="oe_im"]')
       

    //Should check if the names are aranged in alphabetical order
    //Administrator, Angela Pangilinan, Arnie L. Mooc, Arnie Lorenzo, Eusebio Yu, Imogene Deckow
    //Jenny Teodoro, Johanna Ortega, Johanna Ortega (copy), Lyssa Angela Lacambra, MD gruppe 2
    //Maria Novicio, Megawide, Mooc, Arnie, Roovin Admin, Sample Employee, Sample Employee MD
    //Yu, Eusebio C., awb-qa, rio
    
    cy.get('[class="oe_im_users"]')
    .then(items => {
      const unsortedItems = items.map((index, html) => Cypress.$(html).text()).get();
      const sortedItems = unsortedItems.slice().sort();
      expect(unsortedItems, 'Items are sorted!').to.deep.equal(sortedItems);

   });

   //---------------------------------------Other Method--------------------------------------------------------------------------------------------------------
   
   //cy.get('[class="oe_im_users"]')
   //.invoke('text').should('eq',[
    //'\n        \n            \n        \n        Administrator\n        \n    \n        \n            \n        \n        Angela Pangilinan\n        \n    \n        \n            \n        \n        Arnie L. Mooc\n        \n    \n        \n            \n        \n        Arnie Lorenzo\n        \n    \n        \n            \n        \n        Eusebio Yu\n        \n    \n        \n            \n        \n        Imogene Deckow\n        \n    \n        \n            \n        \n        Jenny Teodoro\n        \n    \n        \n            \n        \n        Johanna Ortega\n        \n    \n        \n            \n        \n        Johanna Ortega (copy)\n        \n    \n        \n            \n        \n        Lyssa Angela Lacambra\n        \n    \n        \n            \n        \n        MD gruppe 2\n        \n    \n        \n            \n        \n        Maria Novicio\n        \n    \n        \n            \n        \n        Megawide\n        \n    \n        \n            \n        \n        Mooc, Arnie\n        \n    \n        \n            \n        \n        Roovin Admin\n        \n    \n        \n            \n        \n        Sample Employee\n        \n    \n        \n            \n        \n        Sample employee MD\n        \n    \n        \n            \n        \n        Yu, Eusebio C.\n        \n    \n        \n            \n        \n        awb-qa\n        \n    \n        \n            \n        \n        rio\n        \n    '
//].join(''));
       
    })
})