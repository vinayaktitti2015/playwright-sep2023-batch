import { test, expect } from "@playwright/test";
import * as fs from "fs";
test("should download the file from the page", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByText("File Download").first().click();

  // Wait for the file to be downloaded.
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByText("Bridge-class -5 worksheet -1.jpg").click(),
    // no of promises define here
  ]);

  const filename = await download.suggestedFilename();
  const filepath = "downloads/" + filename;
  await download.saveAs(filepath);
  await expect(fs.existsSync(filepath)).toBeTruthy();

  await download.delete();
  await page.waitForTimeout(5000);
  await expect(fs.existsSync(filepath)).toBeFalsy();

  
});
