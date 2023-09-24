import { test, expect } from "@playwright/test";
import { assert } from "chai";
import { ENV } from "../utils/constants";
const payload = require("../testdata/payload.json");

test.describe("put methods", () => {
  test("verify list of users endpoint should return 200", async ({
    request,
  }) => {
    const getRequest = await request.put(ENV.API_URL + "/api/users/2", {
      headers: {
        Accept: "application/json",
      },
      data: {
        name: "morpheus",
        job: "SDET role",
      },
    });
    expect(getRequest.status()).toBe(200);

    const response = await getRequest.json();
    console.log(response);

    // assertions
    expect(response.name).toBe("morpheus");
    expect(response.job).toBe("SDET role");

    assert.isNotNull(response.updatedAt);

    // expect(await response).toContainEqual(
    //   expect.objectContaining({
    //     name: "morpheus",
    //     job: "SDET role",
    //     updatedAt: "2023-09-23T14:53:08.127Z",
    //   })
    // );
  });
});
