///<reference types ="Cypress" />

describe('My First test suite ',function(){

    it('My First test case ',function(){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.products').as('productlocator')
    cy.get('.product:visible').should('have.length',4)
    cy.get('@productlocator').find('.product').should('have.length',4)
    cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
        console.log('Test')
    })
    
    cy.get('@productlocator').find('.product').each(($e1, index, $list) => {
    const vegtext = $e1.find('h4.product-name').text()
    if (vegtext.includes('Cashews'))
    {
     $e1.find('button').click()

    }
    cy.get('.brand').should('have.text','GREENKART')
    cy.get('.brand').then(function(logoelement){
        cy.log(logoelement.text())
    
    }
    )
    })
    })
})