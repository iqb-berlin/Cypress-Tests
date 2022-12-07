import {
  visitLoginPage
} from './utils';


describe('Example', () => {

  before(visitLoginPage);

  it('so sachen', () => {
    /* Öffne das Impressum*/
    cy.get('.mat-card-box > .mat-card-actions > .mat-focus-indicator > .mat-button-wrapper').click();
    /*Wieder zurück zur Hauptseite */
    cy.get('.mat-button-wrapper').click();
   
  });
});