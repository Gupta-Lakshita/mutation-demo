// TEST QUALITY: WEAK.
// Only tests one strong password and one obviously-weak one. The individual
// && conditions in isStrongPassword are never isolated, so logical-operator
// mutants survive (e.g. dropping the hasNumber check still passes).
import { describe, it, expect } from "vitest";
import { isStrongPassword } from "../src/password";

describe("password", () => {
  it("accepts a strong password", () => {
    expect(isStrongPassword("Password1")).toBe(true);
  });

  it("rejects a weak password", () => {
    expect(isStrongPassword("abc")).toBe(false);
  });
  // Missing: a password that fails on ONLY length, ONLY number, or ONLY
  // uppercase. Without those, the && mutants can't be killed.
});
