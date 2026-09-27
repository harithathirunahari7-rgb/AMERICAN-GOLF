import {Page,Locator} from '@playwright/test'
export class ViewCartPage{
    readonly page:Page
    readonly checkOut:Locator

    constructor(page:Page){
        this.page = page
        this.checkOut = page.getByRole('button',{name:'Go to checkout'})


    }


}