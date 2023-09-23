import { test, expect, chromium, Page } from "@playwright/test";
import { RegisterPage3 } from "../pages/registerPageDesign3.po";
import { faker } from "@faker-js/faker";
test.describe("register feature", () => {
  //let page: Page;
  test("should register the user successfully", async ({ page }) => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const company = faker.company.name();

    // await page.goto("https://demo.nopcommerce.com/");
    // await page.waitForLoadState("networkidle");
    // await page.waitForTimeout(5000);

    const registerPage = new RegisterPage3(page);
    await registerPage.goto();
    await registerPage.clickRegisterLink();
    await registerPage.formSubmission(
      firstName,
      lastName,
      company,
      email,
      password
    );
  });
});
