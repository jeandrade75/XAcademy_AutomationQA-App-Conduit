describe('Login Test', () => {
  it('Should sing up ', () => {
    cy.visit('https://conduit.bondaracademy.com/');
    cy.get('.container > .nav > :nth-child(3) > .nav-link').click();
    const numeroRandom = Math.floor(1000+ Math.random()*9000);
    cy.get('input[placeholder="Username"]').type(`test${numeroRandom}`);
    cy.get('input[placeholder="Email"]').type(`test${numeroRandom}`);
    cy.get('input[type="password"]').type('tu_password');
    cy.get('button[type="submit"]').click();
    //cy.url().should('include', '/');
    //cy.contains('Your Feed').should('be.visible');
  });
});
