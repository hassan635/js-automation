describe("Google test", () =>{
    it("can navigate to google", () =>{
        cy.visit("https://www.google.com/")
        cy.get("input[name='q']").type("Allah").type("\r")
    });
});