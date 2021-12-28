describe("Querying", () => {
  it("get", () => {
    cy.visit("https://example.cypress.io/");
    cy.get('a:contains("get")').should("be.visible").click();

    cy.get(".query-form").within(() => {
      cy.get("#inputEmail").should("have.attr", "placeholder", "Email").type("test@gmail.com");
      cy.get("#inputPassword").should("have.attr", "placeholder", "Password").type("password");
      cy.root().should("have.class", "query-form");
    });
  });
});
