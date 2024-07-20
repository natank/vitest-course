import { describe, it, expect } from "vitest";
import { add, subtract, multiply, divide } from "./calculator";

describe("Calculator Module", () => {
  describe("add function", () => {
    describe("Basic Operations", () => {
      it("adds two positive numbers", () => {
        expect(add(1, 2)).toBe(3);
      });

      it("adds a positive and a negative number", () => {
        expect(add(1, -1)).toBe(0);
      });
    });

    describe("Edge Cases", () => {
      it("handles adding large numbers", () => {
        expect(add(1000, 2000)).toBe(3000);
      });

      it("handles adding floating-point numbers", () => {
        expect(add(1.5, 2.5)).toBe(4);
      });
    });
  });

  describe("subtract function", () => {
    // Similar structure for subtract function
  });

  describe("multiply function", () => {
    // Similar structure for multiply function
  });

  describe("divide function", () => {
    // Similar structure for divide function
  });
});
