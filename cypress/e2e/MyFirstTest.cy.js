describe('My First Test', () => {
    it('Verify test-positive', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should("eq","OrangeHRM")
    })

    it('Verify test-negative', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should("eq","Orangehrm")
    })
  })