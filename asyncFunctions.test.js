// asyncFunctions.test.ts
import { describe, it, expect } from "vitest";

// Simulated async function
const fetchUserData = async (userId) => {
  if (userId === "1234") {
    return { id: "1234", name: "John Doe" };
  } else {
    throw new Error("User not found");
  }
};

describe("fetchUserData", () => {
  it("should return user data for valid userId", async () => {
    const data = await fetchUserData("1234");
    expect(data).toEqual({ id: "1234", name: "John Doe" });
  });

  it("should throw an error for invalid userId", async () => {
    await expect(fetchUserData("5678")).rejects.toThrow("User not found");
  });
});
