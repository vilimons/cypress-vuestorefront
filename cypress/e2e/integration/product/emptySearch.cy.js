/// <reference types="cypress" />

describe('To verify that the product search functionality handles an empty search query appropriately', () => {
    it('should leave the search input field empty', () => {
        cy.visit('https://demo.vuestorefront.io/')
        cy.get('[data-testid="input-field"]')
        .click()
        
        cy.get('[data-testid="search-submit"]').click()
    })
})