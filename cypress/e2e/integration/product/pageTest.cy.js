/// <reference types="cypress" />

describe('To verify that the product page displays accurate and complete information about a product', () => {
    it('should contain information about a product', () => {
        cy.visit('')
        cy.get('[data-testid="input-field"]').type('Cardigan Sun68{enter}')
        cy.wait(2000)
        cy.get(':nth-child(1) > .p-2 > [data-testid="link"]').click()
        
        // product information
        cy.get('[data-testid="productName"]').should('have.text', 'Cardigan Sun68 cream')
        cy.get('[data-testid="price"]').should('have.text', '$112.50')
        cy.get('.w-full > span > .object-contain').invoke('attr', 'src').should('not.be.empty')
        cy.get('[data-testid="addToCartButton"]').should('have.prop', 'tagName', 'BUTTON')
        cy.get('.p-4 > :nth-child(7)').should('include.text', 'arrives by')
        cy.get('.grid-in-left-bottom > div.px-4').should('have.length.greaterThan', 0)
        cy.get('[data-testid="productDescription"]').should('not.be.empty')
        cy.get('[data-testid="customerReviews"]').should('not.be.empty')
        cy.get('[data-testid="recommended-products"]').should('have.length.greaterThan', 0)
    })
})