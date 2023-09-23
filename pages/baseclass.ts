import { Page } from "@playwright/test";
import { ENV } from "../utils/constants";

export class BaseClass {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // generic function to navigate to a url
  async goto() {
    await this.page.goto(ENV.PROD_BASEURL);
  }

  async gotoURL(url: string) {
    await this.page.goto(url);
  }

  async goback() {
    await this.page.goBack();
  }

  async click(selector: string) {
    await this.page.click(selector);
  }

  async type(selector: string, text: string) {
    await this.page.type(selector, text);
  }

  async waitForSelector(selector: string) {
    await this.page.waitForSelector(selector);
  }

  async waitForTimeout(ms: number) {
    await this.page.waitForTimeout(ms);
  }

  async goForward() {
    await this.page.goForward();
  }
}
