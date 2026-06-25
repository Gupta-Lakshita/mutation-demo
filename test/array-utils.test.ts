// TEST QUALITY: STRONG.
import { describe, it, expect } from "vitest";
import { sum, max, unique, average } from "../src/array-utils";

describe("array-utils", () => {
  describe("sum", () => {
    it("sums numbers", () => {
      expect(sum([1, 2, 3])).toBe(6);
    });
    it("returns 0 for empty", () => {
      expect(sum([])).toBe(0);
    });
  });

  describe("max", () => {
    it("finds the largest", () => {
      expect(max([3, 1, 2])).toBe(3);
    });
    it("works when largest is first", () => {
      expect(max([9, 1, 2])).toBe(9);
    });
    it("throws on empty", () => {
      expect(() => max([])).toThrow();
    });
  });

  describe("unique", () => {
    it("removes duplicates and keeps order", () => {
      expect(unique([1, 1, 2, 3, 2])).toEqual([1, 2, 3]);
    });
  });

  describe("average", () => {
    it("averages numbers", () => {
      expect(average([2, 4])).toBe(3);
    });
    it("returns 0 for empty", () => {
      expect(average([])).toBe(0);
    });
  });
});
