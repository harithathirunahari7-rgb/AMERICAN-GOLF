import { test, expect } from '@playwright/test'

        test.beforeEach(async ({ page }) => {
        // Add shared setup here.
        await page.goto('https://americangolf.co.uk/en/')
    })

    test('count products after filter difference', async ({ page }) => {
        await page.getByRole('link',{name:'New Arrivals'}).click()
        //const productsBeforeFilter = page.locator('.border-3')
       const productCards =  page.locator('.flex.flex-col.gap-16.p-8.text-center')
        await productCards.first().waitFor()

        let before =await productCards.count();

       // await page.getByRole('checkbox',{name:'mens'}).check()
       await page.getByRole('checkbox',{name:'junior'}).check()

      // await page.getByRole('presentation')
      const minSlider = page.locator(
  'input[type="range"][aria-label="Minimum"]'
);

await minSlider.evaluate((element) => {
    const slider = element as HTMLInputElement;

    slider.value = '500';

    slider.dispatchEvent(
        new Event('input', { bubbles: true })
    );

    slider.dispatchEvent(
        new Event('change', { bubbles: true })
    );
});
    
//const sliders = page.getByRole('slider');
//const minSlider = sliders.nth(0);
//const maxSlider = sliders.nth(1);

await minSlider.focus();
await minSlider.press('ArrowRight');


//await maxSlider.focus();
//await maxSlider.press('ArrowLeft');

//await sliders.nth(0).fill('100');
//await sliders.nth(1).fill('500');

       //page.waitForTimeout(3000)
        //await expect(page.getByRole('checkbox',{name:'mens'})).toBeChecked()
       await expect(page.getByRole('checkbox',{name:'junior'})).toBeChecked()
        await productCards.first().waitFor()

    console.log( 'after'+ await productCards.count());
       console.log(`before ${before}`)
       // await expect.poll(()=>after).toBe(before)
    page.locator('.text-14.text-secondary-black').nth(1).click()
    //sortBox.scrollIntoViewIfNeeded()
    page.locator('.absolute.right-0').nth(2).click()
  // page.getByText('Low to High').first().click()
    await page.waitForTimeout(3000)

    })

    




