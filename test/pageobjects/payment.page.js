// test/pageobjects/payment.page.js
import { $ } from '@wdio/globals'

class PaymentPage {
    get radioCashOnDelivery () {
        return $('~radio-cash-on-delivery')
    }

    get btnCheckout () {
        return $('~btn-checkout')
    }

    async waitForLoaded () {
        await this.radioCashOnDelivery.waitForExist({ timeout: 10000 })
    }

    async selectCashOnDelivery () {
        await this.radioCashOnDelivery.click()
    }

    async confirmCheckout () {
        await this.btnCheckout.click()
    }

    async finishOrder () {
        await this.confirmCheckout()
    }
}

export default new PaymentPage()