import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPageObjects";

test.describe("nop-commerce web login", () => {
  test("user login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.userLogin();
  });
});
