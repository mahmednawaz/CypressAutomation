describe("Facebook",()=>{
    it ("login", ()=>{
        cy.visit("https://facebook.com/")
        cy.get("#email").type("manch20mobile@gmail.com")
        cy.get("#pass").type("lightbeam123")
        cy.get("button[type='submit']").click()
    })
})