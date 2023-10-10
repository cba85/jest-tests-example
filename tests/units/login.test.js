const checkLoginValidation = require("../../src/validations/login");

describe("login validation", () => {
  it("login validation without parameter", () => {
    const result = checkLoginValidation("", "");

    expect(result).toBeFalsy();
  });

  it("check login validation with parameters", () => {
    const result = checkLoginValidation("fege", "gergerge");

    expect(result).toBeTruthy();
  });
});
