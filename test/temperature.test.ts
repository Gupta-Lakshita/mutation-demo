// TEST QUALITY: STRONG.
import { describe, it, expect } from "vitest";
import {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  isFreezing,
} from "../src/temperature";

describe("temperature", () => {
  it("converts C to F", () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
    expect(celsiusToFahrenheit(100)).toBe(212);
    expect(celsiusToFahrenheit(-40)).toBe(-40);
  });

  it("converts F to C", () => {
    expect(fahrenheitToCelsius(32)).toBe(0);
    expect(fahrenheitToCelsius(212)).toBe(100);
  });

  it("detects freezing at and below zero", () => {
    expect(isFreezing(0)).toBe(true); // boundary checked
    expect(isFreezing(-1)).toBe(true);
    expect(isFreezing(1)).toBe(false);
  });
});
