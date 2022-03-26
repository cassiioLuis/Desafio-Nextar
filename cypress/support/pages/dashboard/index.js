import { el } from './elements'

class DashPage {

    go() {
        cy.visit('/', { timeout: 10000 })
        //cy.wait(2000)
    }

    search(product) {
        cy.get(el.inputSearch, { timeout: 7000 })
            .clear()
            .type(product)
        cy.wait(1500)
    }

    add(product) {
        cy.contains(el.product, product, { timeout: 7000 })
            .parent()
            .find(el.addButton)
            .click()
    }

    remove(product) {
        cy.contains(el.product, product, { timeout: 7000 })
            .parent()
            .find(el.removeButton)
            .click()
    }

    shouldHaveText(expected) {
        cy.contains(el.inCart, expected)
            .should('be.visible')
    }

    shouldNotBeVisibleTextCart() {
        cy.get(el.inCart)
            .should('not.exist')
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