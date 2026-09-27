import {Page,Locator} from '@playwright/test'

export class loginCustomer{

    page:Page
    login_icon:Locator
    login_button:Locator
    email:Locator
    password:Locator
    submit:Locator
    acceptCookies:Locator
    errorMessage:Locator


constructor(page:Page){
    this.page = page
    this.login_icon = this.page.locator('.flex.w-fit.whitespace-nowrap').locator('i')
    this.login_button = this.page.locator('.w-full.py-12.px-24.rounded-md')
    this.email = this.page.getByRole('textbox', { name: 'Email Address', exact: true })
    this.password = this.page.getByRole('textbox', { name: 'Password' })
    this.submit = this.page.getByRole('button', { name: 'Log in' })
    this.acceptCookies = page.getByRole('button', { name: 'Accept All' })
    this.errorMessage = this.page.getByText("We didn't recognise your details. Please check your email and password.", { exact: true })
}
async launchURL(url:any){

    await this.page.goto(url)
       
    
}

async beforeLoginCustomer(){
    await this.login_icon.click()
    await this.login_button.click()
   await this.acceptCookies.click()
}

async loginCustomerIntoAG(email:any,password:any){
    
    await this.email.fill(email)
    await this.password.fill(password)
     await this.submit.click()
    
    
}

}