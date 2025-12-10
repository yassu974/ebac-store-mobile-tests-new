// test/pageobjects/orderSuccess.page.js
import { $ } from '@wdio/globals'

class OrderSuccessPage {
    get successMessageElement () {
        return $('~label-order-success')
    }

    async getSuccessMessage () {
        return this.successMessageElement.getText()
    }
}

export default new OrderSuccessPage()