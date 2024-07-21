import {
  describe,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
  it,
  expect,
} from "vitest";

describe("Example Test Suite", () => {
  beforeAll(() => {
    console.log("Running before all testssss");
    // Initialize resources like database connections
  });

  beforeEach(() => {
    console.log("Running before each test");
    // Reset state before each test
  });

  afterAll(() => {
    console.log("Running after all tests");
    // Clean up resources like closing database connections
  });

  afterEach(() => {
    console.log("Running after each test");
    // Clean up after each test
  });

  it("Test 1", () => {
    expect(true).toBe(true);
  });

  it("Test 2", () => {
    expect(true).toBe(true);
  });
});
