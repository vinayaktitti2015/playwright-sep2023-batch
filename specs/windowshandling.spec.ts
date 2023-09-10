import { test, expect } from "@playwright/test";

test("should handle the windows", async ({ page }) => {
  await page.goto("https://demoqa.com/browser-windows");
  const popupPromise = page.waitForEvent("popup");
  await page.locator("#windowButton").click();
  const popup = await popupPromise;

  if (popup) {
    await popup.close();
  } else {
    throw new Error("Popup not opened");
  }

  try {
    /**
     * const allPopups: Page[] = await browser.pages();
     *
     * const firstPopup: Page = allPopups[0];
     * const secondPopup: Page = allPopups[1];
     * const thirdPopup: Page = allPopups[2];
     */
  } catch (e) {
    throw new Error(e);
  }

  // forEach loops over all windows

  const win = await popup.evaluate("location.href");
  console.log("window url is: " + win);
  page.on("popup", (popup) => {
    // do popup stuff
    expect(popup.url()).toBe(win);
    popup.close();
  });

  // switch back to the main window
  await expect(page.locator(".main-header")).toBeVisible();
});
