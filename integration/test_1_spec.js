describe("test 1", () => {
  it("test visit", () => {
    cy.visit("giavang");
    cy.findRowByContent("SJC 1L, 10L");
  });
});
