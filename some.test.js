import { describe, it, expect } from "vitest";

describe("my suite", () => {
  it("adding 1 and 2 should be 3", () => {
    expect(1 + 2).toBe(3);
  });

  it("adding 3 and 4 should be 7", () => {
    expect(3 + 4).toBe(7);
  });
});
