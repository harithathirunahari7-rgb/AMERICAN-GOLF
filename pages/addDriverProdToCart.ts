import {Page,Locator,expect} from '@playwright/test'


export class addDriverProdToCart{
    page:Page
    productsPerPage : Locator
    prodName : Locator
    

    constructor(page:Page){
        this.page = page
        this.productsPerPage = this.page.locator('.flex.flex-col.gap-16.p-8.text-center')
        //console.log(this.productsPerPage.allTextContents());
        //this.prodName = this.page.locator('.break-normal').last()//visible in two places
       // this.prodName = this.page.locator('.flex.flex-col.gap-y-24 h1 ').last()
        this.prodName = this.page.locator('h1').nth(1)
       // console.log(this.prodName);
    
    }

    async countOfProducts(){
       const products = await this.productsPerPage.allTextContents()
       console.log(products);
      /*for(let prod of await products){
        console.log(prod);

      }*/
    }
    async addProdDriverToCart(index:number){
     
      // const  golfDriver = await this.productsPerPage.nth(4).textContent()
      await this.productsPerPage.nth(4).waitFor()
      await this.countOfProducts()
        await this.productsPerPage.nth(index).click()
      await expect(this.prodName).toBeVisible()

        

    }

    

}
