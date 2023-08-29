// Login

describe('the user login to hte site ', () => {
    it('successfully logins', () => {
      cy.visit('https://www.jumia.com.eg/')
      cy.get ('.cw > .cls').click()
      cy.get (':nth-child(1) > .trig >').eq(0).click()
      cy.get ('#dpdw-login-box > .inbox > .-pam > .btn').click()
      cy.get('#input_identifierValue').type('1112513553')
      cy.get(':nth-child(3) > .mdc-touch-target-wrapper > .mdc-button > .mdc-button__touch').click()
      cy.get('.mdc-text-field__input').type('//*classAhmed')
      cy.get('#loginButton > .mdc-button__touch').click()
      // to check that the user is logged in
      cy.get(':nth-child(1) > .trig >').eq(0).click()
      cy.get('[href="/customer/wishlist/index/"]')
    })
  })