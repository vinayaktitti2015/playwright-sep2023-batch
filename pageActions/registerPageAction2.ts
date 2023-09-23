import { Page, expect } from "@playwright/test";
import RegisterPage2 from "../pages/registerPageDesign2.po";
import { BaseClass } from "../pages/baseclass";
//import { BaseClass } from "../pageobjects/baseclass.po";
const data = require("../testdata/formdata.json");
//var assert = require("chai").assert;

export class RegisterPageActions extends BaseClass {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async formSubmit(): Promise<void> {
    const pageobjects = new RegisterPage2();
    await this.page.locator(pageobjects.getRegisterLink()).click();
    await this.page.locator(pageobjects.getGender()).check();
    await this.page.locator(pageobjects.getFirstname()).fill(data.firstname);
    await this.page.locator(pageobjects.getLastname()).fill(data.lastname);
    await this.page.locator(pageobjects.getEmail()).fill(data.email);
    await this.page.locator(pageobjects.getPassword()).fill(data.password);
    await this.page
      .locator(pageobjects.getPasswordConfirmation())
      .fill(data.password);
    await this.page.locator(pageobjects.getRegisterButton()).click();
    await expect(
      this.page.locator(pageobjects.getRegisterMessage())
    ).toBeVisible();
  }
}

// pattern structure for
/**
 * page actions for registration page
 */
