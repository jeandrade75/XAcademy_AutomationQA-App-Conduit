describe('Create Article', () => {
    it('Should create a new article', () => {
      cy.visit('https://conduit.bondaracademy.com/');
      cy.contains('Sign in').click();
      cy.get('input[placeholder="Email"]').type('tu_email@example.com');
      cy.get('input[type="password"]').type('tu_password');
      cy.get('button[type="submit"]').click();
      
      cy.contains('New Article').click();
      cy.get('input[placeholder="Article Title"]').type('Mi nuevo artículo');
      cy.get('input[placeholder="What\'s this article about?"]').type('Prueba Cypress');
      cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Este es el contenido del artículo.');
      cy.get('input[placeholder="Enter tags"]').type('Cypress{enter}');
      cy.contains('Publish Article').click();
  
      cy.url().should('include', '/article');
      cy.contains('Mi nuevo artículo').should('be.visible');
    });
  });