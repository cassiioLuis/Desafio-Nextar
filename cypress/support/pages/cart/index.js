import { el } from './elements'

class CartPage {

    go() {
        cy.get(el.openCart)
            .click()
    }

    observacao(text){
        cy.get(el.obs)
            .clear()
            .type(text)
    }

    nextButton(){
        cy.contains(el.button, 'Avançar')
            .click()
    }

    sendRequest(){
        cy.contains(el.button, 'Enviar pedido')
            .click()
    }

    addressForm(address){
        cy.get(el.cep).clear().type(address.cep)
        cy.get(el.number).clear().type(address.number)
        cy.get(el.complement).clear().type(address.complement)
    }

    identifyForm(data){
        cy.get(el.name).clear().type(data.name)
        cy.get(el.email).clear().type(data.email)
        cy.get(el.phone).clear().type(data.phone)
        cy.get(el.checkbox).click()
    }

    shouldHaveText(expected){
        cy.contains(el.validation, expected, { timeout: 7000 })
            .should('be.visible')
    }

    shouldHaveItem(item){
        cy.contains(el.itemCart, item)
            .should('be.visible')
    }

}

export default new CartPage()

