describe('criar uma nova conta e comprar uma passagem', () => {
  it('passes', () => {
    cy.visit('https://embarcai-sales-staging.herokuapp.com/')
  // criar conta
    cy.get('[href="/sessions/new"] > .text-white').click();
    cy.get('.btn-dark').click();
    cy.get('#customer_name').type('Teste QA');
    cy.get('#customer_email').type('tesatea@gmail.com');
    cy.get('#customer_password').type('Embarca!1324');
    cy.get('#customer_password_confirmation').type('Embarca!1324');
    cy.get('#customer_birthdate').type('1999-01-01');
    cy.get('#customer_phone').type('41999977777');
    cy.get('#customer_cpf').type('88576077043');
    cy.get('.card > .btn').click();
    cy.get('#fullname').should('be.visible')
    cy.visit('https://embarcai-sales-staging.herokuapp.com/')
  // comprar passagem
    //cy.xpath("//a[contains(@href, 'https://embarca.ai/onibus/maringa-pr/sao-paulo-sp-todos?utm_source=Embarca&utm_id=Home')][2]").click();
    cy.get('#origin_text').type('maringa')
    cy.get('[data-id="0"]').click();
    cy.get('#destination_text').type('sao paulo')
    cy.get('[data-id="0"]').click();
    cy.get('#search-trips-btn').click();
    cy.xpath("//div[contains(@class, 'header-embarca')]//button").click({force:true});
    cy.xpath("//div[contains(@data-number, '33')]").click();
    cy.wait(5000);
    cy.xpath("//a[contains(@class, 'submit')]").click({force:true});
  // preencher dados
    // cy.wait(5000);
    // cy.get('#email').type('testeqa@bbkara.cai');
    // cy.get('#pass_log_id').type('Embarca!1324');
    // cy.get('form > .btn').click();
    cy.wait(4000);
    cy.xpath("//input[contains(@name, '[name]')]").type("Teste QA");
    cy.xpath("//input[contains(@name, '[rg]')]").type("123412341");
  })
})