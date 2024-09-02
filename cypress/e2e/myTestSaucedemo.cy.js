describe ('Casos de prueba en Saucedemo', () => {

    //Acceder al website www.saucedemo.com
    it('Saucedemo testing : flujos compra --> standard_user', () => {
        cy.visit('https://www.saucedemo.com/');

        //Verificar el inicio de sesión con las credenciales correctas
        cy.reload();
        cy.login('standard_user', 'secret_sauce');
        cy.get('.inventory_item_name').should('exist');
        cy.wait(500);

        //Compruebe si puede añadir un producto a la cesta
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('exist'); //Seleccione un producto y añádalo a la cesta
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        cy.get('[data-test="shopping-cart-badge"]').click(); //Abrir el carrito y verificar si el producto fue añadido
        cy.get('.item_pricebar > .btn_secondary').should('exist');
        cy.wait(500);

        cy.get('.btn_action').click(); //Haga clic en el botón de pago y verifique los pasos
        cy.get('[data-test="firstName"]').type('Gabriela'); //Rellene el nombre, el apellido y el código postal
        cy.wait(500);
        cy.get('[data-test="lastName"]').type('Mendez');
        cy.wait(500);
        cy.get('[data-test="postalCode"]').type('123456');
        cy.wait(500);
        cy.get('.btn_primary').click();
        cy.get('.btn_action').should('exist');
        cy.get('.btn_action').click();
        cy.get('[data-test="complete-text"]').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        cy.wait(500);
        
        //Vericar el logout 
        cy.get('.bm-burger-button > button').click();
        cy.get('#logout_sidebar_link').click();
        cy.get('#login-button').should('exist');
        cy.wait(500); 
        
    });

    it('Saucedemo testing : flujo compra --> problem_user', () => {
        cy.visit('https://www.saucedemo.com/');

        //Verificar el inicio de sesión con las credenciales correctas
        cy.reload();
        cy.login2('problem_user', 'secret_sauce');
        cy.get('.inventory_item_name').should('exist');
        cy.wait(500);

        //Compruebe si puede añadir un producto a la cesta
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('exist'); //Seleccione un producto y añádalo a la cesta
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        cy.get('[data-test="shopping-cart-badge"]').click(); //Abrir el carrito y verificar si el producto fue añadido
        cy.get('.item_pricebar > .btn_secondary').should('exist');
        cy.wait(500);

        cy.get('.btn_action').click(); //Haga clic en el botón de pago y verifique los pasos
        cy.get('[data-test="firstName"]').type('Luis'); //Rellene el nombre, el apellido y el código postal
        cy.wait(500);
        cy.get('[data-test="lastName"]').type('Torres');
        cy.wait(500);
        cy.get('[data-test="postalCode"]').type('123456');
        cy.wait(500);
        cy.get('.btn_primary').click();
        cy.get('.btn_action').should('exist');
        cy.get('.btn_action').click();
        cy.get('[data-test="error"]').should('exist');
        cy.wait(500);
        
        //Vericar el logout 
        cy.get('.bm-burger-button > button').click();
        cy.get('#logout_sidebar_link').click();
        cy.get('#login-button').should('exist');
        cy.wait(500); 
        
    });
});
