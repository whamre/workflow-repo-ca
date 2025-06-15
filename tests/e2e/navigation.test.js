// tests/e2e/navigation.test.js
import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("Navigate to home page, wait for venue list, click first venue, verify venue details page", async ({
    page,
  }) => {
    // Navigate to the home page
    await page.goto("/");

    // Wait for the venue list to load (wait for venue links to appear)
    await page.waitForSelector("#venue-container a", { timeout: 10000 });

    // Get the first venue element (it's an anchor tag)
    const firstVenue = page.locator("#venue-container a").first();

    // Click the first venue
    await firstVenue.click();

    // Wait for navigation to venue details page
    await page.waitForURL("**/venue/**", { timeout: 10000 });

    // Verify that when the venue details page loads there are the words "Venue details" in the heading
    await expect(
      page.locator("h1, h2, h3").filter({ hasText: /venue details/i })
    ).toBeVisible({ timeout: 5000 });
  });
});
