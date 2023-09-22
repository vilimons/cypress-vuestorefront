/// <reference types="cypress" />

describe('To verify that the product search functionality returns relevant results based on user input', () => {

    const product = 'sneaker'

    it('should visit the website, type some product on the search box and click on the search button', () => {
        cy.visit('/')
        cy.get('[data-testid="input-field"]')
          .click()
          .type(product)
        
        cy.get('[data-testid="search-submit"]').click()

        cy.get('.typography-headline-3').should('include.text', product)

        cy.get('[data-testid="category-grid"] > :nth-child(1) > .p-2')
          .should('be.visible')
    })
})