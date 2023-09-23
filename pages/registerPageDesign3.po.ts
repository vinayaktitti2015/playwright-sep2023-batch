import { Page } from "@playwright/test";
import { faker } from "@faker-js/faker";

const getRegisterLink: string = ".ico-register";
const getGender: string = "#gender-male";
const getFirstname: string = "#FirstName";
const getLastname: string = "#LastName";
const getEmail: string = "#Email";
const getDate: string = '[name="DateOfBirthDay"]';
const getMonth: string = '[name="DateOfBirthMonth"]';
const getYear: string = '[name="DateOfBirthYear"]';
const getPassword: string = "#Password";
const getPasswordConfirmation: string = "#ConfirmPassword";
const getCompany: string = "#Company";
const getNewsletter: string = "#Newsletter";
const getRegisterButton: string = "#register-button";

export class RegisterPage3 {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // stateless functions
  async goto() {
    await this.page.goto("https://demo.nopcommerce.com/");
    await this.page.waitForLoadState("networkidle");
    await this.page.waitForTimeout(5000);
  }

  async clickRegisterLink() {
    await this.page.locator(getRegisterLink).click();
    await this.page.waitForTimeout(5000);
  }

  async formSubmission(
    firstName: string,
    lastName: string,
    company: string,
    email: string,
    password: string
  ) {
    //await this.page.locator(getGender).waitFor();
    const date = faker.date.birthdate();
    const month = faker.date.month();

    await this.page.waitForSelector(getGender);
    await this.page.locator(getGender).check();
    await this.page.locator(getFirstname).fill(firstName);
    await this.page.locator(getLastname).fill(lastName);
    await this.page.locator(getEmail).fill(email);
    await this.page.locator(getCompany).fill(company);
    await this.page.locator(getDate).selectOption("10");
    await this.page.locator(getMonth).selectOption(month);
    await this.page.locator(getYear).selectOption("1930");
    await this.page.locator(getPassword).fill(password);
    await this.page.locator(getPasswordConfirmation).fill(password);
    await this.page.locator(getRegisterButton).click();
  }
}
