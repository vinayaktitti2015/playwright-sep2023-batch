import { test, expect } from "@playwright/test";

// test suite
test.describe("web ui controls", () => {
  // hooks or annotations
  // test cases
  test("should fill the form successfully", async ({ page }) => {
    await page.goto("https://www.globalsqa.com/samplepagetest/");
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
    await profilePic.setInputFiles("testdata/profilepic.jpeg");
    await name.fill("John doe");
    await email.fill("john.doe@yahoo.com");
    await website.fill("https://playwright.dev/");
    await exp.selectOption("7-10");
    await expertise.first().check();
    await education.last().check();

    // alert events
    page.on("dialog", async (dialog) => {
      await dialog.dismiss();
      await dialog.accept();
    });

    await comment.fill("This is a comment");
    await submit.click().then(async () => {
      expect(page.waitForLoadState("domcontentloaded")).toBeTruthy();
      await page.waitForSelector("div[class='content_bgr'] h3:nth-child(1)");
      const message = await page.getByText("Message Sent (go back)");
      await expect(message).toBeVisible();
    });
  });
});

