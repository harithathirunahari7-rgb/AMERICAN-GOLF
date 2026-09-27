import { test, expect } from '@playwright/test';

// spec: specs/american-golf-search-product-plan.md
// seed: tests/seed.spec.ts

test.describe('American Golf search and product validation', () => {
  test('Open homepage, search for product, verify details', async ({ page }) => {
    // 1. Navigate to https://www.americangolf.co.uk/
    await page.goto('https://www.americangolf.co.uk/');
    await expect(page).toHaveURL(/americangolf\.co\.uk/);

    // 2. Confirm the homepage loads and the site content is visible
         await expect(
      page.getByRole('heading', { name: 'Trending Products' })
                   ).toBeVisible();
        
    await page.getByRole('button', { name: 'Accept All' }).click();

    
    // 3. Enter "TaylorMade Ladies SIM2 MAX" in the site search box
    const search = page.locator('input[type="search"]')
       await search.fill('TaylorMade Ladies SIM2 MAX');

    // 4. Wait for search suggestions/results to appear
    await expect(page.locator('input[type="search"]')).toBeVisible();

    // 5. Confirm the search results list is shown
    const result = page.getByText(/TaylorMade Ladies SIM2 MAX/i).first();
    await expect(result).toBeVisible();

    // 6. Select the relevant product from the search results
    await result.click();

    // 7. Confirm the product details page loads
    await expect(page).toHaveURL(/.*taylormade.*sim2.*max.*/i);

    // 8. Verify the product name is "TaylorMade Ladies SIM2 MAX"
    const productName = page.locator('h1').first();
    await expect(productName).toContainText('TaylorMade Ladies SIM2 MAX');

    // 9. Verify the product price is displayed and non-empty
    const price = page.locator('text=/\£|\$|€/i').first();
    await expect(price).toBeVisible();
    await expect(price).not.toHaveText('');
  });
});
