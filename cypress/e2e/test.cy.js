describe("Navigation", () => {
  it("should navigate to start page", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome").should("be.visible");
  });

  it("should navigate to favoritpage", () => {
    cy.visit("/");
    cy.contains("Favorites").should("be.visible").click();
    cy.url().should("include", "/favorites");
    cy.contains("h1", "Favorite Movies").should("be.visible");
  });
});
