export const visitLoginPage = () => {
    cy.visit(`${Cypress.config().baseUrl}/#/r/login/`);
    cy.contains('IQB-Testcenter')
    .should('exist');
  };