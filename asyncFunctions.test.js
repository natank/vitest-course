// asyncFunctions.test.ts
import { describe, it, expect } from "vitest";

// Simulated async function
const fetchUserData = async (userId) => {
  if (userId === 1) {
    return { id: 1, name: "John Doe" };
  } else {
    throw new Error("User not found");
  }
};

describe("fetchUserData", () => {
  it("should return user data for valid userId", async () => {
    const data = await fetchUserData(1);
    expect(data).toEqual({ id: 1, name: "John Doe" });
  });

  it("should throw an error for invalid userId", async () => {
    await expect(fetchUserData(2)).rejects.toThrow("User not found");
  });
});
