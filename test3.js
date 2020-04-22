///<reference types ="Cypress" />

describe('My Second test suite ',function(){

    it('My Second test case ',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()
    // Window:alert 
    cy.on('window:alert',(str) => 
    {
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    //Window:Confirm
    cy.on('window:confirm',(str) => 
    { 
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
    //Open child tab in same tab and go back 
    cy.get('#opentab').invoke('removeAttr','target').click()
    cy.url().should('include','index')
    cy.go('back')


 
})
})