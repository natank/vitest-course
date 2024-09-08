import { describe, it, expect } from "vitest";
import { sum } from "./sum";

describe("sum part 1", () => {
  it("adds two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("adds zero to number", () => {
    expect(sum(0, 2)).toBe(2);
  });
  it("adding negative numbers", () => {
    expect(sum(-1, -1)).toBe(-2);
  });
  it("adding floating numbers", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
  it("adding large numbers", () => {
    expect(sum(10000, 20000)).toBe(30000);
  });
});
