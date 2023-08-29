// Sign Up

describe('the user register to hte site ', () => {
    it('successfully register', () => {
      cy.visit('https://www.jumia.com.eg/')
      cy.get ('.cw > .cls').click()
      cy.get (':nth-child(1) > .trig >').eq(0).click()
      cy.get ('#dpdw-login-box > .inbox > .-pam > .btn').click()
      cy.get('#input_identifierValue').type('1017685276')
      cy.get(':nth-child(3) > .mdc-touch-target-wrapper > .mdc-button > .mdc-button__touch').click()
      cy.get('#card_password > :nth-child(3) > .mdc-text-field > .mdc-text-field__input').type('//*classmohamed')
      cy.get('#card_password > :nth-child(4) > .mdc-text-field > .mdc-text-field__input').type('//*classmohamed')
      cy.get('#card_password > .actions > .mdc-touch-target-wrapper > .mdc-button > .mdc-button__touch').click()
      cy.get(':nth-child(2) > .mdc-text-field').type('Mohamed')
      cy.get('#card_profile_details > :nth-child(3) > .mdc-text-field').type('Ahmed')
      cy.get('#card_profile_details > :nth-child(4) > .mdc-text-field > .mdc-text-field__input').type('ziad.mahmoud@rocketmail.com')
      cy.get('#card_profile_details > .actions > .mdc-touch-target-wrapper > .mdc-button > .mdc-button__touch').click()
      cy.get('.mdc-select__anchor').click()
      cy.get('[data-value="M"] > .mdc-deprecated-list-item__text').click()
      cy.get('.center > :nth-child(4) > .mdc-text-field').click().type('08/29/2005')
      cy.get('#acceptTC').click()
      cy.get('.center > .actions > .mdc-touch-target-wrapper').click()
     
   
      
      

    })
}) 