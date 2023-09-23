import { expect, Page, Locator } from "@playwright/test";
import { BaseClass } from "./baseclass";
const data = require("../testdata/formdata.json");
import { ENV } from "../utils/constants";

export class LoginPage {
  readonly page: Page;
  readonly loginLink: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly myaccount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginLink = this.page.locator(".ico-login");
    this.email = this.page.locator(".email");
    this.password = this.page.locator("#Password");
    this.loginButton = this.page.locator(".login-button");
    this.myaccount = this.page.locator(".ico-account");
  }

  async goto() {
    await this.page.goto(ENV.PROD_BASEURL);
  }

  async clickLoginLink() {
    await this.loginLink.click();
  }

  async enterEmail(email: string) {
    await this.email.type(email);
  }

  async typePassword(text: string) {
    await this.password.type(text);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async verifyDashboard(text: string) {
    await expect(this.myaccount).toHaveText(text);
  }

  async userLogin() {
    await this.clickLoginLink();
    await this.enterEmail(data.email);
    await this.typePassword(data.password);
    await this.clickLoginButton();
    await this.verifyDashboard(data.myaccount);
  }
}
