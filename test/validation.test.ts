// TEST QUALITY: MEDIUM.
// Tests both true/false outcomes but NEVER checks the exact boundary (age 18),
// so the >= vs > mutant survives.
import { describe, it, expect } from "vitest";
import {
  isAdult,
  isInRange,
  isValidEmail,
  isNonEmptyString,
} from "../src/validation";

describe("validation", () => {
  it("treats 25 as adult and 10 as not", () => {
    expect(isAdult(25)).toBe(true);
    expect(isAdult(10)).toBe(false);
    // Missing: expect(isAdult(18)).toBe(true) -> boundary mutant survives
  });

  it("checks ranges", () => {
    expect(isInRange(5, 0, 10)).toBe(true);
    expect(isInRange(20, 0, 10)).toBe(false);
  });

  it("validates emails", () => {
    expect(isValidEmail("a@b.com")).toBe(true);
    expect(isValidEmail("nope")).toBe(false);
  });

  it("detects non-empty strings", () => {
    expect(isNonEmptyString("hi")).toBe(true);
    expect(isNonEmptyString("   ")).toBe(false);
  });
});
