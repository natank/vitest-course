import { describe, it, expect } from "vitest";

describe("Basic Assertions", () => {
  it("checks equality with toBe", () => {
    const result = 5 + 3;
    expect(result).toBe(8);
  });

  it("checks deep equality with toEqual", () => {
    const user = { name: "Alice", age: 25 };
    expect(user).toEqual({ name: "Alice", age: 25 });
  });

  it("checks if an array contains an item with toContain", () => {
    const fruits = ["apple", "banana", "orange"];
    expect(fruits).toContain("banana");
  });

  it("checks the length of an array with toHaveLength", () => {
    const fruits = ["apple", "banana", "orange"];
    expect(fruits).toHaveLength(3);
  });
});
