import { test, expect } from "@playwright/test";

test("should handle the iframes", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/iframe");

  const content = await page.frameLocator("#mce_0_ifr").locator("body");
  content.fill("hello world");
  await expect(content).toHaveText("hello world");

  // verify css properties
  const bold = await page.locator('[aria-label="Bold"]');
  bold.click();
  await expect(bold).toHaveCSS("font-weight", "bold");
});

test("should handle the multi-iframes", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/nested_frames");

  const topiframe = await page.frameLocator('[name="frame-top"]');
  const frameleft = await topiframe
    .frameLocator('[name="frame-left"]')
    .locator("body");

  await expect(frameleft).toHaveText("LEFT");
});
