// TEST QUALITY: MEDIUM.
// Covers all four output branches, but a single example each — some
// arithmetic/logical mutants may still slip through.
import { describe, it, expect } from "vitest";
import { fizzbuzz } from "../src/fizzbuzz";

describe("fizzbuzz", () => {
  it("returns the number as a string when nothing matches", () => {
    expect(fizzbuzz(1)).toBe("1");
  });
  it("returns Fizz for multiples of 3", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });
  it("returns Buzz for multiples of 5", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
  });
  it("returns FizzBuzz for multiples of 15", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });
});
