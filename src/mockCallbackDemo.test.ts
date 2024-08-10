import { describe, it, expect, vi } from "vitest";

export function processItems(
  items: number[],
  callback: (item: number) => void
): void {
  items.forEach((item) => {
    // Perform some processing logic (could be more complex)
    callback(item);
  });
}

describe("processItems", () => {
  it("should call the callback function for each item in the array", () => {
    const mockCallback = vi.fn();

    const items = [1, 2, 3];

    processItems(items, mockCallback);

    // Verify that the callback was called 3 times
    expect(mockCallback).toHaveBeenCalledTimes(3);

    // Verify that the callback was called with the correct arguments
    expect(mockCallback).toHaveBeenCalledWith(1);
    expect(mockCallback).toHaveBeenCalledWith(2);
    expect(mockCallback).toHaveBeenCalledWith(3);
  });

  it("should handle an empty array without calling the callback", () => {
    const mockCallback = vi.fn();

    const items: number[] = [];

    processItems(items, mockCallback);

    // Verify that the callback was never called
    expect(mockCallback).not.toHaveBeenCalled();
  });
});
