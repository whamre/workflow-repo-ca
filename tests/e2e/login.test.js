// tests/e2e/login.test.js
import { test, expect } from "@playwright/test";

test.describe("Login", () => {
  test("User can successfully log in with valid credentials from environment variables", async ({
    page,
  }) => {
    // Navigate to login page
    await page.goto("/login/");

    // Fill in the login form with credentials from environment variables
    await page.fill(
      'input[name="email"]',
      process.env.LOGIN_EMAIL || "testuser123@stud.noroff.no"
    );
    await page.fill(
      'input[name="password"]',
      process.env.LOGIN_PASSWORD || "testuser123"
    );

    // Submit the form
    await page.click('button[type="submit"]');

    // Wait for navigation to complete and check for successful login
    await page.waitForURL("**/", { timeout: 10000 });

    // Verify we're logged in (look for logout button or user menu)
    await expect(page.locator("text=Logout")).toBeVisible();
  });

  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    // Navigate to login page
    await page.goto("/login/");

    // Fill in the login form with invalid credentials
    await page.fill('input[name="email"]', "invalid@example.com");
    await page.fill('input[name="password"]', "wrongpassword");

    // Submit the form
    await page.click('button[type="submit"]');

    // Wait for error message to appear (could be various error messages)
    await expect(page.locator("#message-container")).not.toBeEmpty({
      timeout: 5000,
    });
  });
});
