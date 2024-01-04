describe("template spec", () => {
  it("passes", () => {
    cy.visit("../../index.html");

    cy.get("#visible-button").click();
  });
});
