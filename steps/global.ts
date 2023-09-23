import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { Page, Browser, chromium } from "@playwright/test";

let page: Page;
let browser: Browser;
setDefaultTimeout(30000);

Before(async () => {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/login");
  return page;
});

After(async () => {
  await browser.close();
});

export { page, browser };
