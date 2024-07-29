import { describe, it, expect } from "vitest";
import { add } from "./calculator";

describe("add", () => {
  it("adds two numbers", () => {
    console.log("add(1, 2):");
    expect(add(1, 2)).toBe(3);
  });

  it("adds zero", () => {
    console.log("add(0, 0):");
    expect(add(0, 0)).toBe(0);
  });

  it("adds negative numbers", () => {
    console.log("add(-1, -1):");
    expect(add(-1, -1)).toBe(-2);
  });

  // Intentional failure: add should be 0, but we expect 1
  it("adds positive and negative numbers", () => {
    console.log("add(1, -1):");
    expect(add(1, -1)).toBe(1);
  });

  // Intentional failure: add should be 3000, but we expect 3001
  it("adds large numbers", () => {
    console.log("add(1000, 2000):");
    expect(add(1000, 2000)).toBe(3001);
  });
});
