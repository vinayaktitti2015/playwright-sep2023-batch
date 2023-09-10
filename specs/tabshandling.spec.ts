import { test, expect, chromium, firefox } from "@playwright/test";

test("should handle the tabs", async ({}) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // main window
  await page.goto("https://demoqa.com/browser-windows");

  const [newTab] = await Promise.all([
    context.waitForEvent("page"),
    page.click("#tabButton"),
  ]);

  // switch to the new tab
  await newTab.waitForLoadState("load");
  await newTab.bringToFront();

  // assert that the new tab is now active
  await expect(newTab.url()).toBe("https://demoqa.com/sample");

  // or
  await expect(newTab).toHaveURL("https://demoqa.com/sample");
  await expect(newTab.locator("#sampleHeading")).toBeVisible();
  await expect(newTab.locator("#sampleHeading")).toHaveText(
    "This is a sample page"
  );

  await newTab.close();

  // switch to the main window
  await expect(page.locator(".main-header")).toBeVisible();
});
