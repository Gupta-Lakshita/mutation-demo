// TEST QUALITY: STRONG.
// Edge cases, boundaries, and exact outputs are all asserted. Most mutants
// here should be killed -> high confidence score.
import { describe, it, expect } from "vitest";
import { capitalize, truncate, slugify, repeat } from "../src/strings";

describe("strings", () => {
  describe("capitalize", () => {
    it("capitalizes the first letter", () => {
      expect(capitalize("hello")).toBe("Hello");
    });
    it("returns empty string unchanged", () => {
      expect(capitalize("")).toBe("");
    });
    it("leaves the rest of the string intact", () => {
      expect(capitalize("aBC")).toBe("ABC");
    });
  });

  describe("truncate", () => {
    it("does not truncate short strings", () => {
      expect(truncate("hi", 5)).toBe("hi");
    });
    it("truncates at exactly the boundary length", () => {
      expect(truncate("hello", 5)).toBe("hello");
    });
    it("adds ellipsis when too long", () => {
      expect(truncate("hello world", 5)).toBe("hello...");
    });
  });

  describe("slugify", () => {
    it("lowercases and dashes", () => {
      expect(slugify("Hello World")).toBe("hello-world");
    });
    it("strips leading and trailing dashes", () => {
      expect(slugify("  Hello!  ")).toBe("hello");
    });
  });

  describe("repeat", () => {
    it("repeats a string n times", () => {
      expect(repeat("ab", 3)).toBe("ababab");
    });
    it("returns empty for zero times", () => {
      expect(repeat("ab", 0)).toBe("");
    });
  });
});
