export class PricingService {
  getPrice(itemId: string): number {
    // Simulated prices
    const prices: Record<string, number> = {
      "001": 15.99,
      "002": 25.5,
      "003": 9.99,
    };
    return prices[itemId] || 0;
  }
}
