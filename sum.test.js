import { describe, it, expect } from "vitest";
import { sum } from "./sum";

describe("sum part 1", () => {
  it("adds two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("adds zero", () => {
    expect(sum(0, 2)).toBe(2);
  });
  it("adding negative numbers", () => {
    expect(sum(-1, -1)).toBe(-2);
  });
});
