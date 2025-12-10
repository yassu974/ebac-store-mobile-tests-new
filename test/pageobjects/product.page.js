// test/pageobjects/product.page.js
import { $ } from '@wdio/globals'

class ProductPage {
    get btnAddToCart () {
        return $('~btn-add-to-cart')
    }

    async addToCart () {
        await this.btnAddToCart.click()
    }
}

export default new ProductPage()