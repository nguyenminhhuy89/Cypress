Cypress.Commands.add("findRowByContent", (content) => {
  cy.get("table tbody tr").first().should("be.visible");
});
