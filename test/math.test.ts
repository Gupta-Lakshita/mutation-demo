// TEST QUALITY: WEAK (on purpose).
// The famous trap: add(2, 2) === 4 ALSO passes if + becomes *.
// So the arithmetic mutant survives. 100% line coverage, low confidence.
import { describe, it, expect } from "vitest";
import { add, subtract, multiply, divide, clamp } from "../src/math";

describe("math", () => {
  it("adds two numbers", () => {
    expect(add(2, 2)).toBe(4); // 2*2 is also 4 -> mutant survives
  });

  it("subtracts two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it("multiplies two numbers", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it("divides two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  // No test for divide-by-zero, and no test for clamp's boundaries.
  it("clamps a value in range", () => {
    expect(clamp(5, 0, 10)).toBe(5); // never tests the < or > branches
  });
});
