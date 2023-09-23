import { test, Page } from "@playwright/test";
import { RegisterPageActions } from "../pageActions/registerPageAction2";
import { ENV } from "../utils/constants";
// readonly page: Page;
// const registerPage = new RegisterPage(page);
test.describe("form submission", () => {
  // Hooks
  test.beforeEach(async ({ page }) => {
    await page.goto(ENV.PROD_BASEURL);
  });

  test("should register successfully", async ({ page }) => {
    const registerPage = new RegisterPageActions(page);
    await registerPage.formSubmit();
  });
});

// pattern structure for
/**
 * calling page actions in the spec file
 */
