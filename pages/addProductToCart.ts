import {Page,Locator,expect} from '@playwright/test'
import {loginCust} from './LoginCustomer'
import {SearchProduct} from './searchProduct'
import {SearchString} from '../testdata/searchString.json'

export class AddProductToCart{

    readonly page: Page
    readonly combobox_choosehand:Locator
    readonly quantity: Locator
    readonly quantitySelectorPlus: Locator
    readonly quantitySelectorMinus: Locator
    readonly addToCart: Locator
    readonly shoppingCart: Locator
    readonly viewShoppingCart : Locator
    readonly addToBasket : Locator
    readonly gotoCart :Locator

    constructor(page : Page){
        this.page = page
        this.combobox_choosehand = this.page.locator('.relative.mt-4.rounded-md.p-6 select')
         
  //this.shoppingCart = page.locator('.flex.h-full.flex-col.items-stretch')
  this.shoppingCart = this.page.getByText('SHOPPING CART').first()

  
    //this.quantitySelectorPlus = page.locator('div.items-center button[fdprocessedid="f99bas"]')
        //this.quantitySelectorMinus = page.locator('div.items-center button[fdprocessedid="z3h3h"]')
        this.quantitySelectorPlus = page.getByRole('button', { name: '+', exact: true })
        this.quantitySelectorMinus = page.getByRole('button', { name: '-', exact: true })       
        this.quantity = page.getByText('-1+')
        this.addToCart = page.getByRole('button', { name: 'Add to cart' })
        //this.viewShoppingCart = page.locator('h3').getByRole('heading',{name:"SHOPPING CART"})
        this.viewShoppingCart = page.getByText('VIEW SHOPPING CART')
        this.addToBasket = page.locator('.py-12.px-24.rounded-md').first()
        this.gotoCart = page.locator('.py-12.px-24.rounded-md').nth(1)
    
    
    }

    async addProdToCart(page:Page){
        const searchProd = new SearchProduct(this.page)
        await this.combobox_choosehand.selectOption({value:"Right Hand"})
        await this.quantitySelectorPlus.click()
        await this.quantitySelectorPlus.click()
        await this.addToCart.click()
        //await expect(this.shoppingCart).toBeVisible()
        //await page.waitForTimeout(3000)
       // await expect(this.viewShoppingCart).toBeVisible()
      
        await this.viewShoppingCart.click()
         //await this.gotoCart.click()
       await  expect(this.page).toHaveURL(/.*cart.*/)

        
        

    }

    
}