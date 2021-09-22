describe('Shoe Details', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('[data-cy=shoe-0] .shoe-link')
        .invoke('attr', 'href')
        .then(href => {
            cy.visit(href)
        })
    })

    it('has an image carousel', () => {
        cy.get('.shoe-images').should('be.visible')
    })

    it('accepts quantity input', () => {
        cy.get('[data-cy=shoe-quantity-input]')
        .type(1)
        .should('have.value', '01')
    })

    it('can select a size from dropdown', () => {
        cy.get('.sizes')
        .should('have.value', null)

        cy.get('.sizes')
        .select('UK 6')
        cy.get('.sizes')
        .should('have.value','UK 6')
    })

    it('has a submit button', () => {
        cy.get('[data-cy=add-to-cart-button]')
        .should('have.text', 'Add to Cart')
    })

    it('can add an item to the cart', () => {
        cy.get('.sizes')
        .select('UK 6')

        cy.get('[data-cy=shoe-quantity-input]')
        .type(1)
        
        cy.get('[data-cy=add-to-cart-button]')
        .click()

        cy.get('.cart-size')
        .should('have.text', '1')
        cy.get('[data-cy=alert]')
        .should('be.visible')
    })

})
