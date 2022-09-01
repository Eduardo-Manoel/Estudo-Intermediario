/// <reference types="Cypress" />

describe('Delete Project', () => {
    it('successfully', () => {
        cy.login()
    })
    it('Seleciona um projeto', () => {
        cy.get('.namespace-name').contains('Eduardo Manoel').click()
        cy.login()
    })
    it('Configuracões', () => {
        cy.get('.nav-item-name').contains('Setting').click()
        cy.login()
        cy.get('.active').contains('General').click()
        cy.get('#js-project-advanced-settings').contains('Expand').click()
    })
    it.only('Remover Projeto',() =>{
        cy.get ('input[type="submit"][value="Remove project"]')
    })
})


// cy.get('input[type="radio"][value="feedback"]')
//       .check()
//       .click()
//       .should('have.value', 'feedback')

