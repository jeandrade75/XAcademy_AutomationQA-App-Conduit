describe('Login Test', () => {
  it('Should log in with valid credentials', () => {
    cy.visit('https://conduit.bondaracademy.com/');
    cy.contains('Sign in').click();
    cy.get('input[type="text"]').type('tu_email@example.com');
    cy.get('input[type="password"]').type('tu_password');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/');
    cy.contains('Your Feed').should('be.visible');
  });
});
