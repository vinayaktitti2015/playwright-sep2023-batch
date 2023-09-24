import { test, expect } from "@playwright/test";
import { ENV } from "../utils/constants";
test.describe("fetch user data", () => {
  test("fetch single user", async ({ request }) => {
    const getRequest = await request.get(ENV.API_URL + "/api/users/2", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + "434j434i4juii3j4ijij4",
      },
    });
    expect(getRequest.status()).toBe(ENV.SUCCESS);

    const response = await getRequest.json();
    console.log(response);

    expect(response.data.email).toBe("janet.weaver@reqres.in");
    expect(response.data.first_name).toBe("Janet");
    expect(response.data.last_name).toBe("Weaver");
  });
});
