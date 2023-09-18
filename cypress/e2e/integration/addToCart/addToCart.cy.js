/// <reference types="cypress" />

describe('To verify that users can successfully add items to their shopping cart', () => {
    it('should add an product to the shopping cart and assert all conditions', () => {
        cy.visit('https://demo.vuestorefront.io/category')
        cy.get(':nth-child(1) > .p-2 > [data-testid="link"]').click()
        
        cy.get('[data-testid="productName"]')
          .should('be.visible')
          .should('have.text', 'Casual jacket Michael Kors beige')
          
        cy.get('[data-testid="addToCartButton"]')
          .should('be.visible')
          .click()
          
        cy.get('[data-testid="alert"]')
          .should('be.visible')

        cy.visit('https://demo.vuestorefront.io/cart')

        cy.get('.typography-headline-3').should('have.text', 'My Cart')

        cy.get('[data-testid="totalInCart"]').contains('Items: 1')

        cy.get('[data-testid="quantitySelectorIncreaseButton"]').click()

        cy.get('[data-testid="totalInCart"]').contains('Items: 2')
        
        cy.get('[data-testid="alert"]').should('be.visible')

        cy.get('[data-testid="quantitySelectorDecreaseButton"]').click()

        cy.get('[data-testid="totalInCart"]').contains('Items: 1')
        
        cy.get('[data-testid="cart-header"] > [data-testid="button"]').click()
        
        cy.url().should('include', '/category')
        
    })
})