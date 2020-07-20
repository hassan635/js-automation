describe("Dynamics 365 functions", () => {
    it("can login", () => {
        cy.visit("https://org70c874a1.crm6.dynamics.com")
        cy.get("input[name='loginfmt']").type("admin@M365x776665.onmicrosoft.com")
    })
})