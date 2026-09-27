import {Page,Locator,expect} from '@playwright/test'
import { loginCustomer } from './LoginCustomer'

export class ProductCheckout{

    page:Page
    prodCheckout : Locator

    constructor(page:Page){
        this.page = page
        //this.prodCheckout = this.page.locator('[href="/en/checkout/"]')
        this.prodCheckout = this.page.getByRole('button',{'name': /Go to checkout/i})
    }
    async checkout(){
        await this.prodCheckout.click()
        await expect(this.page).toHaveURL(/.*checkout.*/)
    }
}