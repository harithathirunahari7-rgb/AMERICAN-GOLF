import {test,expect} from '@playwright/test'
import { HomePageProducts } from '../pages/HomePageProd'
import { addDriverProdToCart } from '../pages/addDriverProdToCart'
import { driverSizeCategory } from '../pages/driverSize'

test('add driver prod to cart',async({page})=>{
    //test.slow()
    await page.goto('https://americangolf.co.uk/en/');
        
    await page.getByRole('button', { name: 'Accept All' }).click();
    await page.getByRole()

    const hp = new HomePageProducts(page)
    const driver_prod = new addDriverProdToCart(page)
    const driver_size = new driverSizeCategory(page)
  //  await hp.launchURL()
   // await hp.acceptCookies()
    await hp.navigateHeaders()
    //await hp.acceptCookies()
    //await driver_prod.countOfProducts()
    await driver_prod.addProdDriverToCart(4)
    //await hp.acceptCookies()
    await driver_size.selectSizes()

})