import dashPage from '../support/pages/dashboard'


describe('validar apresentação dashboar', function () {

    context('quando pesquiso por um produto', function () {

        const products = ['Capa Celular', 'Chip tim', 'Kit Ferramentas']

        before(function () {
            dashPage.go()
        })

        products.forEach( (prod) => {
            
            it('deve apresentar o produto ' + prod, function () {
                dashPage.search(prod)  
                dashPage.shouldBeProduct(prod)
            })
        })

    })

    context('quando adiciono produtos ao carrinho', function () {
        
        const products = { prod1: 'Alicate de Bico - Uzzy', prod2: 'Cabo p2' }
        const total = '74,50'

        before(function () {
            dashPage.go()
        })

        it('deve apresentar o total das compras no carrinho', function () {
            //dashPage.search(products.prod1)
            dashPage.add(products.prod1)
            dashPage.add(products.prod2)
            
            dashPage.shouldHaveText('2')
            dashPage.shouldHaveTotalPrice(total)
        })

    })

})