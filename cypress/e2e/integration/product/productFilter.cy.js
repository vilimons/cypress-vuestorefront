/// <reference types="cypress" />


describe('To verify that users can effectively filter and sort products based on their preferences', () => {
    beforeEach(() => {
        cy.visit('/category')
    })
    it('should filter the products by category and colors', () => {
        cy.get('[href="/category/accessories"] > [data-testid="list-item"]').click()

        cy.get('.typography-headline-3').should('have.text', 'Accessories')

        cy.get(':nth-child(2) > div.py-2 > :nth-child(2)').click()
          
        cy.get('[data-testid="category-grid"]').should('have.length.greaterThan', 0)

        cy.get('[data-testid="product-card-vertical"]').each(($product) => {
            cy.wrap($product).should('include.text', 'blue')
        })
    })

    it('should clean all the filters', () => {
        cy.get('[href="/category/men"] > [data-testid="list-item"]').click()
        cy.get('.typography-headline-3').should('have.text', 'Men')

        cy.get('[href="/category"] > [data-testid="list-item"]').click()
        cy.get('.typography-headline-3').should('have.text', 'All products')
    })
})