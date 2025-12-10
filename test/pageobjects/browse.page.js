// test/pageobjects/browse.page.js
import { $ } from '@wdio/globals'

class BrowsePage {
    productCardByName (name) {
        return $(`~${name}`)
    }

    async openProductByName (name) {
        const product = await this.productCardByName(name)
        await product.click()
    }
}

export default new BrowsePage()