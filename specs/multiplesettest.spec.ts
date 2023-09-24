import { test, expect } from "@playwright/test";
const jsondata = require("../testdata/formdata.json");
const data = require("../testdata/multipledata.json");

// test cases
test(`should fill the form with multiple sets of data`, async ({ page }) => {
  await page.goto("https://www.globalsqa.com/samplepagetest");

  const profilePic = page.locator('[name="file-553"]');
  const name = page.locator("#g2599-name");
  const email = page.locator("#g2599-email");
  const website = page.locator("#g2599-website");
  const exp = page.locator("#g2599-experienceinyears");
  const expertise = page.locator('[name="g2599-expertise[]"]');
  const education = page.locator('[name="g2599-education"]');
  const alert = page.locator('[onclick="myFunction()"]');
  const comment = page.locator("#contact-form-comment-g2599-comment");
  const submit = page.locator("button[type='submit']");

  // user events
  await profilePic.setInputFiles(jsondata.profilepicpath); // User defined
  await name.fill(data.name); // pre-defined
  await email.fill(data.email); // pre-defined
  await website.fill(data.url); // pre-defined
  await exp.selectOption(jsondata.experience); // User defined
  await expertise.first().check();
  await education.last().check();

  // alert events
  page.on("dialog", async (dialog) => {
    await dialog.dismiss();
    await dialog.accept();
  });

  await comment.fill("This is a comment");
  await submit.click().then(async () => {
    await page.waitForLoadState("domcontentloaded");
    await page.waitForSelector("div[class='content_bgr'] h3:nth-child(1)");
    const message = await page.getByText(jsondata.message);
    await expect(message).toBeVisible();

    const header = await page.locator("h3").first();
    await expect(header).toHaveText("Message Sent (go back)");
  });
});
