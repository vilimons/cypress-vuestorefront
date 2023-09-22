/// <reference types="cypress" />

describe('To verify that users can add multiple items to their shopping cart', () => {
    it('should add multiple items to the shopping cart', () => {
        cy.visit('/product/twin-set-jacket-j2s5ra-black/M0E20000000E925')
        cy.get('[data-testid="addToCartButton"]').click()

        cy.get('[data-testid="input"]')
          .click()
          .type('shorts{enter}')    
          
          cy.get(':nth-child(1) > .p-2 > .mt-auto > [data-testid="add-to-cart-button"]').click()

          cy.get('[data-testid="cart-action"] > [data-testid="button"]').click()

          cy.get('[data-testid="totalInCart"]').contains('Items: 2')
    })
})