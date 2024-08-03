import { describe, it, expect } from "vitest";
import { add, subtract, multiply, divide } from "./calculator";

describe("Calculator Module", () => {
  describe("add function", () => {
    it("adds two positive numbers", () => {
      const result = add(1, 2);
      expect(result).toBe(3);
    });

    it("adds a positive and a negative number", () => {
      expect(add(1, -1)).toBe(0);
    });
  });

  describe("subtract function", () => {
    it("subtracts two positive numbers", () => {
      expect(subtract(2, 1)).toBe(1);
    });

    it("subtracts a larger number from a smaller number", () => {
      expect(subtract(1, 2)).toBe(-1);
    });
  });

  describe("multiply function", () => {
    it("multiplies two positive numbers", () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it("multiplies by zero", () => {
      expect(multiply(2, 0)).toBe(0);
    });
  });

  describe("divide function", () => {
    it("divides two positive numbers", () => {
      expect(divide(6, 3)).toBe(2);
    });

    it("throws an error when dividing by zero", () => {
      expect(() => divide(6, 0)).toThrow("Cannot divide by zero");
    });
  });
});
