// logger.test.ts
import { describe, it, expect, vi } from "vitest";
import * as formatter from "./formatter";
import * as logger from "./logger";

describe("Logger Tests", () => {
  it("should call formatter when logger is called", () => {
    const spy = vi
      .spyOn(formatter, "formatter")
      .mockReturnValue("Mocked Format");

    logger.logger("Test Message");

    expect(spy).toHaveBeenCalledWith("Test Message");
    // Intentionally forgetting to restore the mock
    spy.mockRestore();
  });
});

describe("Formatter Tests", () => {
  it("should format the message correctly", () => {
    const result = formatter.formatter("Test Message");

    expect(result).toBe("Formatted: Test Message");
  });
});
