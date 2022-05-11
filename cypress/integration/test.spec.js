/// <reference types="cypress" />

describe('Test', () => {
  it('Visits the app', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.heading').should('contain', 'Taskify');
  });
});
