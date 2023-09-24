import { test, expect } from "@playwright/test";
import { assert } from "chai";
import { ENV } from "../utils/constants";
const payload = require("../testdata/payload.json");

test.describe("post methods", () => {
  test("verify list of users endpoint should return 201", async ({
    request,
  }) => {
    const postRequest = await request.post("https://reqres.in/api/users", {
      headers: {
        Accept: "application/json",
      },
      data: {
        name: "morpheus",
        job: "leader",
      },
    });
    expect(postRequest.status()).toBe(201);

    const response = await postRequest.json();
    console.log(response);

    assert.isNotNull(response.id);
    assert.isNotNull(response.createdAt);
  });

  test("verify list of users endpoint fetch data from JSON file", async ({
    request,
  }) => {
    const getRequest = await request.post("https://reqres.in/api/users", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: payload,
    });
    expect(getRequest.status()).toBe(201);

    const response = await getRequest.json();
    console.log(response);

    try {
      assert.isNotNull(response.id);
      assert.isNotNull(response.createdAt);
    } catch (err) {
      throw new Error("Data mis-matched: " + response.id);
    }
  });
});
