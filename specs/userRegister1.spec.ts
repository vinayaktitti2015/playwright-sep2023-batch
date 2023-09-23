import { test, expect } from "@playwright/test";
import { RegisterPage } from "../pages/registerPageDesign1.po";
const data = require("../testdata/formdata.json");

//require('dotenv').config();
import "dotenv/config";
var registerPage;
test.describe("nop-commerce register user", () => {
  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await registerPage.goto();
  });

  test("user should be able to register", async ({ page }) => {
    await registerPage.clickRegisterLink();
    await registerPage.selectGenders();
    await registerPage.typeFirstName(data.firstname);
    await registerPage.typeLastName(data.lastname);
    await registerPage.typeEmail(data.email);
    await registerPage.typePassword(data.password);
    await registerPage.typeConfirmPassword(data.password);
    await registerPage.clickRegisterButton();
    await registerPage.verifySuccessMessage(data.successmessage);
  });

  test.only("user should not be able to register with same email", async ({
    page,
  }) => {
    await registerPage.userRegisterFormSubmit();
  });
});
