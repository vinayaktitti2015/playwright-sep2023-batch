import { test, expect } from "@playwright/test";
import { ENV } from "../utils/constants";
var fs = require("fs");
test.describe("fetch token", () => {
  test("fetch token and store in a file", async ({ request }) => {
    const getRequest = await request.post(ENV.API_URL + "/api/register", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + "434j434i4juii3j4ijij4",
      },
      data: {
        email: "eve.holt@reqres.in",
        password: "pistol",
      },
    });
    expect(getRequest.status()).toBe(200);

    const response = await getRequest.json();
    console.log(response);

    const token: string = response.token;
    console.log(token);

    fs.writeFile(
      "../testdata/token.json",
      { token: token },
      function (err: any) {
        if (err) throw err;
        console.log("Token Saved");
      }
    );
  });
});
