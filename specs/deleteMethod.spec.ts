import { test, expect } from "@playwright/test";
import { assert } from "chai";
import { ENV } from "../utils/constants";
const payload = require("../testdata/payload.json");

test.describe("delete methods", () => {
  test("verify user record is deleted from DB or not", async ({ request }) => {
    const getRequest = await request.delete(ENV.API_URL + "/api/users/2", {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer 3ji3j232323",
      },
    });
    expect(getRequest.status()).toBe(204);
  });
});
