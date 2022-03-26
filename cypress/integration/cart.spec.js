import dashPage from '../support/pages/dashboard'
import cartPage from '../support/pages/cart'

describe('carrinho de compras', function () {

    const produtcs = ['Capa para tablet', 'Conector de tomada usb']

    context('deve apresentar os itens no carrinho', function () {

        before(function () {
            dashPage.go()
            produtcs.forEach((item) => {
                dashPage.add(item)
            })
            cartPage.go()
        })

        produtcs.forEach((item) => {
            it('deve apresenta o item ' + item, function () {
                cartPage.shouldHaveItem(item)
            })
        })

    })

    context('realizando a compra', function () {

        const address = { cep: '88505152', number: 1234, complement: 'casa' }
        const data = { name: 'Cássio Luis', email: 'teste@teste.com', phone: '49999999999' }

        before(function () {
            dashPage.go()
            produtcs.forEach((item) => {
                dashPage.add(item)
            })
            cartPage.go()
        })

        it('deve finalizar a compra com sucesso', function () {
            cartPage.observacao('Teste de observação do pedido')
            cartPage.nextButton()
            cartPage.addressForm(address)
            cartPage.nextButton()
            cartPage.identifyForm(data)
            cartPage.sendRequest()

            cartPage.shouldHaveText(data.name)
            cartPage.shouldHaveText(', dê uma olhada no seu e-mail!')
        })
    })

})