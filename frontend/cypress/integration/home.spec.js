describe('Home', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('has the company name', () => {
        cy.get('#golden-shoe').should('have.text','Golden Shoe')
    })

    it('displays four links in the nav bar', () => {
        cy.get('[data-cy=nav-list] li').should('have.length', 4)
    })

    it('have a news banner', () => {
        cy.get('[data-cy=news-banner]').should('be.visible')
    })

    it('has list of featured products', () => {
        cy.get('.shoes-list li').should('have.length.above', 0)
    })

    it('has featured shoes with a name', () => {
        cy.get('[data-cy=shoe-0] [data-cy=shoe-name]').should('be.visible')
    })

    it('has featured shoes with a brand', () => {
        cy.get('[data-cy=shoe-0] [data-cy=shoe-brand]').should('be.visible')
    })

    it('has featured shoes with a price', () => {
        cy.get('[data-cy=shoe-0] [data-cy=shoe-price]').should('be.visible')
    })

})
