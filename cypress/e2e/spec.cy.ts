describe('Mobile navigation', () => {
  it('navigates to the about page', () => {
    cy.visit('/')
    cy.get('button').click()
    cy.get('a[data-test-id="/about-mobile"]').click()
    cy.url().should('include', '/about')
  })
  it('navigates to the blog page', () => {
    cy.visit('/')
    cy.get('button').click()
    cy.get('a[data-test-id="/blog-mobile"]').click()
    cy.url().should('include', '/blog')
  })
})

describe('Desktop navigation', () => {
  it('navigates to the about page', () => {
    cy.viewport('macbook-16')
    cy.visit('/')
    cy.get('a[data-test-id="/about-desktop"]').click()
    cy.url().should('include', '/about')
  })
  it('navigates to the blog page', () => {
    cy.viewport('macbook-16')
    cy.visit('/')
    cy.get('a[data-test-id="/blog-desktop"]').click()
    cy.url().should('include', '/blog')
  })
})

export {}
