/// <reference types="cypress" />

describe('Test', () => {
  it('Visits the app', () => {
    cy.visit('/');
    cy.get('.heading').should('contain', 'Taskify');
    cy.percySnapshot();
  });
});
