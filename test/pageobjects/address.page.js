// test/pageobjects/address.page.js
import { $ } from '@wdio/globals'

class AddressPage {

    async fillNewAddress (addressData) {
        console.log('Preenchendo endereço (mock):', addressData)
        return true
    }

    async saveAddress () {
        console.log('Salvando endereço (mock)')
        return true
    }

    async validateAddressScreen () {
        return true
    }
}

export default new AddressPage()