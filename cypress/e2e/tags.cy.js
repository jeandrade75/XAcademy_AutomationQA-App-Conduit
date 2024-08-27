describe('Tags', () => {
    it('capturar tags', () => {
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/tags', {fixture: 'tags.json'});
        cy.visit('https://conduit.bondaracademy.com');
        
    })
  })
  