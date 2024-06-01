import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

// Co testuju
test.describe("Login functionality", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.visit("/login.html");
  });

  // jak to testuju 
  test("should log user with correct credentials", async ({ page }) => {
    // pises kod sem :)
    // pages = new AllPages(page);
    // await pages.visit("/selectors.html");

  });
});
