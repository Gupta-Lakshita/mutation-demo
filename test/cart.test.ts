// TEST QUALITY: MEDIUM.
// Exercises the main path but never tests the free-shipping boundary (exactly
// 50), so that >= mutant survives.
import { describe, it, expect } from "vitest";
import { subtotal, shippingCost, taxAmount, cartTotal } from "../src/cart";

describe("cart", () => {
  it("computes subtotal", () => {
    expect(subtotal([{ price: 10, quantity: 2 }])).toBe(20);
  });

  it("charges shipping under 50, free over", () => {
    expect(shippingCost(20)).toBe(5);
    expect(shippingCost(60)).toBe(0);
    // Missing: shippingCost(50) -> boundary mutant survives
  });

  it("computes tax", () => {
    expect(taxAmount(100, 0.1)).toBe(10);
  });

  it("computes a full cart total", () => {
    // sub = 60, tax = 6, shipping = 0
    expect(cartTotal([{ price: 30, quantity: 2 }], 0.1)).toBe(66);
  });
});
