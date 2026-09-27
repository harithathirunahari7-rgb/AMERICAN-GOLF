import {test,expect} from '@playwright/test';
import {SearchProduct} from '../pages/searchProduct'; 
import {ViewCartPage} from '../pages/viewCartPage'
import {AddProductToCart} from '../pages/addProductToCart'
import SearchString from '../testdata/searchString.json';
import ProdSize   from '../testdata/productsize.json';
import { ProductCheckout } from '../pages/produuctCheckout';


test.beforeEach(async({page})=>{
await page.goto('https://americangolf.co.uk/en/');
 })

      

 

 

test('Search Product from Search box',async({page})=>{

      // await page.goto('baseURL')
    await page.getByRole('button', { name: 'Accept All' }).click();

    const searchProduct = new SearchProduct(page);
    const addProdToCart = new AddProductToCart(page)
    const prodCheckout  = new ProductCheckout(page)
    
    //console.log(SearchString[0]);
    await searchProduct.searchProduct("ladies golf",3)
    await addProdToCart.addProdToCart(page)
    await prodCheckout.checkout()
    
    /*await searchProduct.searchproduct.pressSequentially(SearchString[0].searchWithString);
    //await searchProduct.searchproduct.press('Enter');
    await searchProduct.combobox.waitFor();
    const array = await searchProduct.combobox.locator('li').allTextContents();
    console.log(array);
    await searchProduct.combobox.locator('li').first().waitFor();
   const productLink =  searchProduct.getTheProductLink(0);
    await productLink.filter
    ({ hasText: SearchString[1].searchWithString }).click();*/
    
   //for(let i:number = 0; i< searchProduct.productCount; i++){
        
    //}
   // await expect(page).toHaveURL('https://americangolf.co.uk/golf-clubs/taylormade-ladies-sim//2-max-graphite-golf-irons-418702.html?variantCode=418702-NA&sku=418703');
    //await expect(page).toHaveURL(/.*taylormade-ladies-sim2-max-grapite-golf-irons.*/);
   /* let searchString:string = SearchString[1].searchWithString.toLowerCase().replaceAll(' ','-');
    console.log(`${searchString}`);
    ///await expect(page).toHaveURL(/`.*${searchString}.*`/);
    await expect(page).toHaveURL(new RegExp(`.*${searchString}.*`));

   // await expect(page).toHaveURL(new RegExp(searchString));
  const sizeCounts = await searchProduct.size.count();
  console.log(`Size Counts: ${sizeCounts}`);
  //console.log(`ProdSize Length: ${ProdSize.length}`);
  //expect(sizeCounts).toBe(ProdSize.length);  
//await searchProduct.size.locator('button').first().waitFor()
 for(let i:number = 0; i< sizeCounts; i++){
    if(ProdSize.size[i] === "16"){
      // console.log(ProdSize.size[i]);
    //if( searchProduct.size.nth(i).textContent() === ProdSize.size[i] && ProdSize.size[i] === "8"){
    await searchProduct.size.getByText(ProdSize.size[i],{exact:true}).click()
  break
     }
    }
   await searchProduct.quantitySelectorPlus.click();
   await searchProduct.quantitySelectorMinus.click();
  await searchProduct.quantitySelectorPlus.click();  
  await searchProduct.addToCart.click();
 // await expect(searchProduct.shoppingCart.last()).toBeVisible()
   await searchProduct.viewShoppingCart.click()
  */
  
});
test('view cart Page',async({page})=>{

      const viewCartPage = new ViewCartPage(page)
      await expect(page).toHaveURL('/americangolf.co.uk/en/cart/')


})
