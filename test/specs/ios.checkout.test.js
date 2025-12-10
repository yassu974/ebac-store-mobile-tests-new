import { expect } from '@wdio/globals'

import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import browsePage from '../pageobjects/browse.page.js'
import productPage from '../pageobjects/product.page.js'
import cartPage from '../pageobjects/cart.page.js'
import addressPage from '../pageobjects/address.page.js'
import paymentPage from '../pageobjects/payment.page.js'
import orderSuccessPage from '../pageobjects/orderSuccess.page.js'

describe('EBAC Store iOS - Fluxo completo de checkout (mockado)', () => {
    it('deve completar o fluxo de checkout com sucesso', async () => {

        // Login
        await loginPage.login(
            'cliente@ebac.art.br',
            'GD*peToHNJ1#c$sgk08EaYJQ'
        )

        // Abre menu Browse
        await homePage.openMenu('browse')

        // Seleciona um produto
        await browsePage.openProductByName('Ingrid Running Jacket')

        // Adiciona no carrinho
        await productPage.addToCart()

        // Abre o carrinho
        await cartPage.openCartFromTabBar()

        // Adiciona endereço e segue para pagamento
        await cartPage.ensureAddressAndGoToPayment({
            name: 'EBAC Cliente',
            mobile: '11999990000',
            address: 'Rua EBAC, 123',
            city: 'São Paulo',
            state: 'SP',
            zipcode: '01000-000'
        })

        // Validação mockada da tela de endereço
        await addressPage.validateAddressScreen()

        // Seleciona pagamento
        await paymentPage.selectCashOnDelivery()

        // Finaliza pedido
        await paymentPage.finishOrder()

        // Verifica sucesso
        const successMsg = await orderSuccessPage.getSuccessMessage()
        expect(successMsg).toContain('Success')
    })
})