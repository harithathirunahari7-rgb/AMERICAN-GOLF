import { Page, Locator, expect } from "@playwright/test";

export class HomePageProducts {

    page: Page;
    listOfrowHeaders: Locator;
    clubsGrid: Locator;
    clubsgridItems: Locator;
    cookiesPopup: Locator;
    

    constructor(page: Page) {

        this.page = page;

        // Main navigation headers
        this.listOfrowHeaders = this.page.locator(
            '[data-qa="ag-nav-header-link"]'
        );

        // Clubs dropdown grid
        this.clubsGrid = this.page.locator(
            '.grid.w-full.grid-cols-5.gap-24'
        );

        // Third grid inside the Clubs menu
        this.clubsgridItems = this.clubsGrid
            .nth(2)
            .locator('.mt-2.space-y-1');

        // Cookies popup
        this.cookiesPopup = this.page.getByRole(
            'button',
            { name: 'Accept All' }
        );
    }


    async launchURL() {

        await this.page.goto(
            'https://americangolf.co.uk/en/',
            {
                waitUntil: 'domcontentloaded'
            }
        );
    }


    async acceptCookies() {

        if (await this.cookiesPopup.isVisible({ timeout: 1000 }).catch(() => false)) {
        await this.cookiesPopup.click()
    }
    }


    async navigateHeaders() {
        
        // Hover over Clubs
        await this.listOfrowHeaders
            .nth(1)
            .hover();

        // Locate Men's Drivers
        const mensDrivers = this.page
    .getByText("Men's Drivers", { exact: true })
    .filter({ visible: true });

        // Verify menu item is visible
        await expect(mensDrivers)
            .toBeVisible();

        // Click Men's Drivers
        await mensDrivers.click();
        

        // Verify URL
        await expect(this.page).toHaveURL(
            /\/golf-clubs\/drivers\/shop-by\/gender\/mens\//
        );

        
    }
}