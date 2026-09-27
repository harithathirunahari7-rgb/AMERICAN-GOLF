import { Page, Locator } from '@playwright/test'

export class driverSizeCategory {

    page: Page
    countDropdown : Locator
    chooseHand: Locator
    chooseShaft: Locator
    chooseFlex: Locator
    chooseLoft: Locator
    quantity: Locator
    quantitySelectorPlus: Locator
    quantitySelectorMinus: Locator

    constructor(page: Page) {
        this.page = page
        this.countDropdown = this.page.locator('select')
        this.chooseHand = this.page.locator('select').nth(0)
        this.chooseShaft = this.page.locator('select').nth(1)
        this.chooseFlex = this.page.locator('select').nth(2)
        this.chooseLoft = this.page.locator('select').nth(3)
        this.quantitySelectorPlus = page.getByRole('button', { name: '+', exact: true })
        this.quantitySelectorMinus = page.getByRole('button', { name: '-', exact: true })
        this.quantity = page.getByText('-1+')
    }
    async selectSizes() {
        await this.countDropdown.nth(0).waitFor()
        await this.chooseHand.selectOption({ index: 1 })
        await this.chooseShaft.selectOption({index: 1})
        await this.chooseFlex.selectOption({ index: 1 })
        await this.chooseLoft.selectOption('10.5°')
        await this.quantitySelectorPlus.click()
        //await this.quantitySelectorPlus.click()
        //await this.quantitySelectorMinus.click()
        //await this.quantitySelectorPlus.click()

    }

}