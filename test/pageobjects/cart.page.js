// test/pageobjects/cart.page.js
import { $ } from '@wdio/globals'
import homePage from './home.page.js'
import addressPage from './address.page.js'
import paymentPage from './payment.page.js'

class CartPage {
    get btnAddNewAddress () {
        return $('~btn-add-new-address')
    }

    addressItemByName (name) {
        return $(`~address-${name}`)
    }

    get btnSelectAddress () {
        return $('~btn-select-address')
    }

    get btnContinueToPayment () {
        return $('~btn-continue-to-payment')
    }

    async openCartFromTabBar () {
        await homePage.openMenu('order')
    }

    async ensureAddressAndGoToPayment (addressData) {
        const existingAddress = await this.addressItemByName(addressData.name)

        if (await existingAddress.isExisting()) {
            await existingAddress.click()
            await this.btnSelectAddress.click()
        } else {
            await this.btnAddNewAddress.click()
            await addressPage.fillNewAddress(addressData)
            await addressPage.saveAddress()
        }

        await this.btnContinueToPayment.click()

        await paymentPage.waitForLoaded()
    }
}

export default new CartPage()