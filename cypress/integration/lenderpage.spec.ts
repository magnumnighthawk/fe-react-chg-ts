context('Lender page', () => {
  it('will load bank of azeroth form and check if all needed fields are present', () => {
    cy.visit(Cypress.config()['host'] + '/bank-of-azeroth');
    // cy.intercept('GET', `${Cypress.config()['api_server']}`, {
    //   fixture: 'bank-of-azeroth.json',
    // });
    cy.contains('h1', 'bank of azeroth');
    cy.get('input[name="first_name"]').should('be.visible');
    cy.get('input[name="last_name"]').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="gender"]').should('be.visible');
    cy.get('input[name="monthly_income"]').should('be.visible');
    cy.get('button').should('be.visible').should('contain', 'Submit');
  });

  it('will load naboo bank form and check if all needed fields are present', () => {});

  it('will submit bank of azeroth form and check if loads accepted status correctly', () => {});

  it('will submit bank of azeroth form and check if loads declined status correctly', () => {});

  it('will submit bank of azeroth form without entering mandatory fields and checks for error states', () => {});
});
