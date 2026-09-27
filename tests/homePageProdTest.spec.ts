import {test,expect} from '@playwright/test'
import { HomePageProducts } from '../pages/HomePageProd'
test('home page products test',async({page})=>{
const homePageProds = new HomePageProducts(page)
await homePageProds.launchURL()
await homePageProds.acceptCookies()
await homePageProds.navigateHeaders()

})