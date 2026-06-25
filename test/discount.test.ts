// TEST QUALITY: WEAK on boundaries.
// Tests values comfortably inside each tier but never the exact thresholds
// (100, 500, 1000), so the >= vs > boundary mutants survive.
import { describe, it, expect } from "vitest";
import { discountRate, applyDiscount } from "../src/discount";

describe("discount", () => {
  it("gives 20% for big orders", () => {
    expect(discountRate(1500)).toBe(0.2); // not 1000 exactly
  });

  it("gives 10% for mid orders", () => {
    expect(discountRate(600)).toBe(0.1); // not 500 exactly
  });

  it("gives 0% for small orders", () => {
    expect(discountRate(50)).toBe(0);
  });

  it("applies the discount", () => {
    expect(applyDiscount(1500)).toBe(1200);
  });
});
