import { describe, it, expect, vi } from "vitest";

describe("Mock Function Demo", () => {
  it("should track the number of times a mock function is called", () => {
    // Create a mock function
    const mockFn = vi.fn();

    // Call the mock function multiple times
    mockFn();
    mockFn();
    mockFn();

    // Assert that the mock function was called three times
    expect(mockFn).toHaveBeenCalledTimes(3);
  });

  it("should capture the arguments of each call", () => {
    const mockFn = vi.fn();

    // Call the mock function with different arguments
    mockFn("first call");
    mockFn("second call", 42);

    // Assert that the mock function was called with specific arguments
    expect(mockFn).toHaveBeenCalledWith("first call");
    expect(mockFn).toHaveBeenCalledWith("second call", 42);
  });

  it("should return a specific value when called", () => {
    const mockFn = vi.fn().mockReturnValue("Hello, World!");

    // Call the mock function and check the return value
    const result = mockFn();
    expect(result).toBe("Hello, World!");
  });

  it("should return different values for different calls", () => {
    const mockFn = vi
      .fn()
      .mockReturnValueOnce("First call")
      .mockReturnValueOnce("Second call");

    // Call the mock function twice and check the return values
    expect(mockFn()).toBe("First call");
    expect(mockFn()).toBe("Second call");
  });

  it("should implement a custom implementation", () => {
    const mockFn = vi.fn((x: number, y: number) => x + y);

    // Call the mock function and check the return value
    const result = mockFn(2, 3);
    expect(result).toBe(5);
  });
});
