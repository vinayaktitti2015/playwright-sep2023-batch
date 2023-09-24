import { test, expect } from "@playwright/test";
import { connection } from "../utils/dbdirectquery";
const data = require("../testdata/formdata.json");
test("should submit the form successfully", ({ page }) => {
  // UI events for form submission
  // fill the form using test data from testdata.json

  // DB validation
  connection().then((dbrecords: any) => {
    expect(dbrecords).toEqual(data.email);
  });
});
