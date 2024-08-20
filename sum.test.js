import { describe, it, expect } from "vitest";
import { sum } from "./sum";

describe("sum part 1", () => {
  it("adds two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
