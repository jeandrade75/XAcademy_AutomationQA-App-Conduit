describe('Creacion de usuario', () => {
    it.skip('Creacion de usuario OK', () => {
      // Interceptar la solicitud POST al endpoint de login
      cy.intercept('POST', '/api/users').as('userCreado');
  
      // Visitar la página de login
      cy.visit('https://conduit.bondaracademy.com');
      cy.contains('Sign up').click();
      const numeroRandom = Math.floor(1000+ Math.random()*9000);
  
      // Llenar el formulario de login
      cy.get('[placeholder="Username"]').type(`test${numeroRandom}`);
      cy.get('[placeholder="Email"]').type(`test${numeroRandom}`);
      cy.get('[placeholder="Password"]').type('123456');
      cy.get('.btn').click()
            
      // Enviar el formulario
      //cy.get('button[type="submit"]').click();
  
      // Esperar a que la solicitud POST sea interceptada
      cy.wait('@userCreado').then((interception) => {
        // Validar que la solicitud POST haya sido enviada correctamente
        expect(interception.response.statusCode).to.eq(201);
        cy.log('Felicidades , se creo el usuario')
  
    });
  });


    it('Wrong user', () => {
      cy.intercept('POST', '/api/users/login').as('userError')
      cy.visit('https://conduit.bondaracademy.com/login')
      //cy.contains('Sign up').click();
      cy.get('[placeholder="Email"]').type('cualquiera')
      cy.get('[placeholder="Password"]').type('12345688')
      cy.get('.btn').click()
      cy.wait('@userError').then((interception) => {
        expect(interception.response.statusCode).to.eq(403)
        cy.log('No campeon, no es por ahi')
  
      });
    });
  });




