import { describe, it, expect } from "vitest";
import { sum } from "./sum";

describe("sum part 1", () => {
  it("adds two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("adds zero", () => {
    expect(sum(1, 0)).toBe(1);
  });
});

describe("sum part 2", () => {
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

describe("my suite", () => {
  it("adding 1 and 2 should be 3", () => {
    expect(1 + 2).toBe(3);
  });

  it("adding 3 and 4 should be 7", () => {
    expect(3 + 4).toBe(7);
  });
});
