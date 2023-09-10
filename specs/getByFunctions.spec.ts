import { test, expect } from "@playwright/test";

test("getBy functions", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.getByPlaceholder("Username").clear();
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").clear();
  await page.getByPlaceholder("Password").fill("admin123");
  await page.locator('[type="submit"]').click();

  await expect(
    page.locator(".oxd-topbar-header-breadcrumb-module")
  ).toContainText("Dashboard");
});

test("get inputvalues", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.getByPlaceholder("Username").clear();
  await page.getByPlaceholder("Username").fill("Admin");

  // checking the value of the input
  const value = await page.getByPlaceholder("Username").inputValue();
  expect(value).toBe("Admin");

  await page.getByPlaceholder("Password").clear();
  await page.getByPlaceholder("Password").fill("admin123");

  const PasswordValue = await page.getByPlaceholder("Password").inputValue();
  expect(PasswordValue).toBe("admin123");

  await page.locator("[type='submit']").click();

  const innerText = await page
    .locator(".oxd-topbar-header-breadcrumb-module")
    .innerText();
  await expect(innerText).toEqual("Reports");
});


/**
 * 
 */