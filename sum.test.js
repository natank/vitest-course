import { describe, it, expect } from "vitest";
import { sum } from "./sum";

describe("sum", () => {
  it("adds two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("adds zero", () => {
    expect(sum(1, 0)).toBe(1);
  });
  it("adds negative numbers", () => {
    expect(sum(1, -1)).toBe(0);
  });

  it("adds large numbers", () => {
    expect(sum(1000, 2000)).toBe(3000);
  });

  it("adds floating point numbers", () => {
    expect(sum(1.5, 2.5)).toBe(4);
  });
});
