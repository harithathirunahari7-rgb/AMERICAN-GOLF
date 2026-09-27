import {test,expect} from '@playwright/test'
import {loginCustomer} from '../pages/LoginCustomer'
import credentials from '../testdata/credentials.json'

let lp:loginCustomer

test.describe('login validations with different users',async()=>{

for(let i:number = 0; i<credentials.length; i++)
    {
    if(credentials[i].user === "valid".toString()){
test(`Login customer with correct credentials for ${i+1} user`,async({page})=>{
   
    lp = new loginCustomer(page)
    lp.launchURL(credentials[i].url)
    await expect(lp.login_icon).toBeVisible()
    await lp.beforeLoginCustomer()
    await lp.loginCustomerIntoAG(credentials[i].email, credentials[i].passsword)
   
    await page.waitForTimeout(3000)
    await page.waitForTimeout(3000)
   // await page.getByRole('button', { name: 'Accept All' }).click();
   
   await expect(page).toHaveURL('https://americangolf.co.uk/cart/')

   // await page.waitForTimeout(3000)
    
})
    }
    else{
test(`Login with wrong credentials for ${i+1} user`,async({page})=>{
   
    lp = new loginCustomer(page)
    lp.launchURL(credentials[i].url)
    await lp.beforeLoginCustomer()
   await lp.loginCustomerIntoAG(credentials[i].email,credentials[i].passsword)
  
  // await expect(page.url).toContain(credentials[i].errorMessage?.toString)
   await expect(lp.errorMessage).toBeVisible()
   
})
    }
}
})
