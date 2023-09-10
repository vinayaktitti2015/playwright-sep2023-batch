import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
const data = require("../testdata/formdata.json");
// test suite
test.describe("web ui controls", () => {
  // hooks or annotations
  test.beforeEach(async ({ page }) => {
    await page.goto("/samplepagetest/");
    // user login
  });

  // test cases
  test("should render", async ({ page }) => {
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
    await profilePic.setInputFiles(data.profilepicpath); // User defined
    await name.fill(faker.person.fullName()); // pre-defined
    await email.fill(faker.internet.email()); // pre-defined
    await website.fill(faker.internet.url()); // pre-defined
    await exp.selectOption(data.experience); // User defined
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
      const message = await page.getByText(data.message);
      await expect(message).toBeVisible();

      const header = await page.locator("h3");
      await expect(header).toHaveText("Form Submitted");
    });
  });
});
