import { el } from './elements'

class DashPage {

    go(){
        cy.visit('/', {timeout: 10000})
    }

    search(product){
        cy.get(el.inputSearch, {timeout: 15000})
        .clear()
        .type(product)

        cy.wait(2000)
    }

    add(product){
        cy.contains(el.product, product, {timeout: 10000})  
            .parent()
            .find(el.addButton)
            .click()
    }

    shouldHaveText(expected){
        cy.contains(el.inCart, expected)
            .should('be.visible')
    }

    shouldHaveTotalPrice(expected) {
        cy.contains(el.totalPrice, expected)
            .should('be.visible')
    }

    shouldBeProduct(product) {
        cy.contains(el.product, product)
            .should('be.visible')
    }

}

export default new DashPage()