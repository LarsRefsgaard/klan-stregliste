/// <reference types="cypress" />
import { getUsers } from '../../src/db/actions'

// const users = getUsers();

it('can add and subtract', function () {
  // cy.log(users);

  cy.visit('http://localhost:3000/')
  let initialValue = null;
  cy.get('[data-cy="Testing beer"]').then(num => {
    initialValue = parseInt(num.text())
  });

  cy.get('[data-cy="add Testing beer"]').click()
  cy.get('[data-cy="Testing beer"]').then(num => {
    cy.get(num).should('have.text', initialValue + 1);
  })

  cy.get('[data-cy="remove Testing beer"]').click()
  cy.get('[data-cy="Testing beer"]').then(num => {
    cy.get(num).should('have.text', initialValue);
  })

});
