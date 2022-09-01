/// <reference types="Cypress" />

describe('login', () => {
    it('successfully', () => {
      cy.screenshot()
      cy.login()
      
  
      cy.get('.qa-user-avatar').should('exist')
      cy.screenshot()
    })
  })
  