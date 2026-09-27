import {Page,Locator,expect} from '@playwright/test';
import SearchString from '../testdata/searchString.json'

export class SearchProduct{ 
    readonly page: Page     
    readonly searchproduct: Locator
    readonly searchLink: Locator
    //readonly searchLink: Locator
    readonly combobox: Locator
    readonly productCount: any
    readonly size: Locator
    
        

    constructor(page: Page) {
        this.page = page;
        this.searchproduct = page.getByRole('searchbox', { name: 'Submit' });
       // this.searchLink = page.getByRole('link', { name: 'TaylorMade Ladies SIM2 MAX' });
       // this.combobox =   page.locator('.aa-List');
      // this.combobox = page.getByRole('combobox').nth(1);
   this.combobox = page.locator('.aa-List')//'TaylorMade Ladies SIM2 MAX' });
  this.searchLink = this.combobox.locator('li')
 
  this.size = page.locator('.flex.flex-wrap.gap-8 div')
  
    }
getTheProductLink(i:number){
    return this.searchLink.nth(i)
}
async searchProduct(productName:any,index:number)
{
    //console.log(productStr);
    await this.searchproduct.pressSequentially(productName);
    
    await this.combobox.waitFor();
    const array = await this.combobox.locator('li').allInnerTexts()
    //console.log(array);
    
    await this.searchLink.first().waitFor();


   await this.page.url().match('golf-clothing')
   //console.log(url);
  //let prodCount = await this.searchLink.count()
  
  
    await this.searchLink.nth(index).click()

   
           
  let searchString: string = array[index].toLowerCase();

searchString = searchString
    .replace(/£\d+\.\d{2}/, '')
    .trim()
    .replaceAll(' ', '-')
    .replace(/-$/, '');

console.log(`new ${searchString}`);
    //await expect(this.page).toHaveURL(/golf-clubs\/fazer-ladies-ctrx-graphite-10-piece-golf-cart-bag-package-set/);
    await expect(this.page).toHaveURL(
    new RegExp(`.*${searchString}.*`))

    //await expect(this.page).toHaveURL(new RegExp(`.*${searchString}.*`));
//await expect(this.page.url).toMatch('/.*.*/')

}
addProductToCart(productName:any){

}

   /*  await page.goto('https://americangolf.co.uk/en/');
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByRole('searchbox', { name: 'Submit' }).click();
  await page.getByRole('searchbox', { name: 'Submit' }).fill('ladies golf');
 // await page.getByRole('searchbox', { name: 'Submit' }).press('Enter');
  await page.getByRole('link', { name: 'TaylorMade Ladies SIM2 MAX' }).click();//nth(from combo)
  await page.getByRole('combobox').nth(1).selectOption('Right Hand');
  await page.goto('https://americangolf.co.uk/golf-clubs/taylormade-ladies-sim//2-max-graphite-golf-irons-418702.html?variantCode=418702-NA&sku=418703');
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('button', { name: 'VIEW SHOPPING CART' }).click();
  await page.locator('body').press('ControlOrMeta+a');*/

}