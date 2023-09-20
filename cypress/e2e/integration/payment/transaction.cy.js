/// <reference types="cypress" />

describe('To verify that the payment integration processes a successful payment transaction without errors', () => {
    it('should complete transaction', () => {
        cy.visit('https://demo.vuestorefront.io/product/poloralphlauren-sweater-C4782AAHEA-rose/M0E20000000E2VT')
        cy.get('[data-testid="addToCartButton"]').click()
        cy.wait(3000)
        cy.visit('https://demo.vuestorefront.io/cart')
        cy.get('[data-testid="goToCheckout"]').click()

        cy.get('[data-testid="contact-information"] > .md\\:max-w-\\[520px\\] > [data-testid="addButton"]')
          .should('be.visible')
          .click()

        cy.get('label > [data-testid="input"]').type('email@email.com')
        cy.get('[data-testid="save"]').click()

        cy.get(':nth-child(4) > .md\\:max-w-\\[520px\\] > [data-testid="addButton"]')
          .should('be.visible')
          .click()

        // Fake data input
        cy.get('[data-testid="firstNameInput"]').type('Jose')
        cy.get('[data-testid="lastNameInput"]').type('Da silva')
        cy.get('[data-testid="phoneInput"]').type('981234567')
        cy.get('[data-testid="countrySelect"]').select('US')
        cy.get('[data-testid="streetNameInput"]').type('sunset st')
        cy.get('[data-testid="streetNumberInput"]').type('90')
        cy.get('[data-testid="cityInput"]').type('New Jersey')
        cy.get('[data-testid="stateSelect"]').select('California')
        cy.get('[data-testid="postalCodeInput"]').type('14780')

        cy.get('.md\\:col-span-3.items-center').click()
        cy.get('[data-testid="save"]').click()

        cy.get('[data-testid="shipping-method"]').should('be.visible')
        cy.get(':nth-child(1) > .flex-col > .flex > .h-5').click()
        cy.get('[data-testid="alert"] > .min-w-0').should('be.visible').should('include.text', 'Cart updated')
        cy.get('[data-testid="credit-card"]').click()

        cy.get('.p-CardNumberInput > p-Input')

        


        
    })
})