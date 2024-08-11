import { describe, it, expect, vi } from "vitest";
import { ShoppingCart } from "./shoppingCart";
import { PricingService } from "./pricingService";

describe("ShoppingCart", () => {
  it("should calculate total cost correctly using spies", () => {
    const mockPricingService = new PricingService();

    // Each item is mocked at a flat rate of $10 for simplicity
    const spy = vi.spyOn(mockPricingService, "getPrice").mockReturnValue(10);

    const cart = new ShoppingCart(mockPricingService);
    cart.addItem("001");
    cart.addItem("002");

    const total = cart.getTotalCost();

    expect(spy).toHaveBeenCalledTimes(2); // Check if getPrice was called twice
    expect(total).toBe(20); // Since the price is mocked at $10, two items should total $20

    spy.mockRestore(); // Restore the original functionality
  });
});
