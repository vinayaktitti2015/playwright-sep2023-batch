import { expect, Page, Locator } from "@playwright/test";
import { BaseClass } from "./baseclass";
const data = require("../testdata/formdata.json");
import { ENV } from "../utils/constants";

export class RegisterPage {
  readonly page: Page;
  readonly registerLink: Locator;
  readonly genderField: Locator;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly confirmPasswordField: Locator;
  readonly registerButton: Locator;
  readonly successmessage: Locator;

  constructor(page: Page) {
    // super(page);
    this.page = page;
    this.registerLink = this.page.locator(".ico-register");
    this.genderField = this.page.locator("#gender-male");
    this.firstNameField = this.page.locator("#FirstName");
    this.lastNameField = this.page.locator("#LastName");
    this.emailField = this.page.locator("#Email");
    this.passwordField = this.page.locator("#Password");
    this.confirmPasswordField = this.page.locator("#ConfirmPassword");
    this.registerButton = this.page.locator("#register-button");
    this.successmessage = this.page.locator(".result");
  }

  async goto() {
    await this.page.goto(ENV.PROD_BASEURL);
  }

  async clickRegisterLink() {
    await this.registerLink.click();
  }

  async selectGenders() {
    await this.genderField.click();
  }

  async typeFirstName(text: string) {
    await this.firstNameField.type(text);
  }

  async typeLastName(text: string) {
    await this.lastNameField.type(text);
  }

  async typeEmail(text: string) {
    await this.emailField.type(text);
  }

  async typePassword(text: string) {
    await this.passwordField.type(text);
  }

  async typeConfirmPassword(text: string) {
    await this.confirmPasswordField.type(text);
  }

  async clickRegisterButton() {
    await this.registerButton.click();
  }

  async verifySuccessMessage(text: string) {
    await expect(this.successmessage).toHaveText(text);
  }

  async userRegisterFormSubmit() {
    await this.clickRegisterLink();
    await this.selectGenders();
    await this.typeFirstName(data.firstname);
    await this.typeLastName(data.lastname);
    await this.typeEmail(data.email);
    await this.typePassword(data.password);
    await this.typeConfirmPassword(data.password);
    await this.clickRegisterButton();
    await this.verifySuccessMessage(data.successmessage);
  }
}
