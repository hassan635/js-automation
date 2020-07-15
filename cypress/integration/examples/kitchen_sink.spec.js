describe("Kitchen-sink test", () => {
    it("can test contains", () => {
        cy.visit("https://example.cypress.io/commands/querying")
        cy.get('div.query-button > button > span').contains("Save Form").should("have.value", "Save Form")
    });
});
