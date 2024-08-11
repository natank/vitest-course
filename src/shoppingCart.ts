import { PricingService } from "./pricingService";

export class ShoppingCart {
  private items: string[] = [];
  private pricingService: PricingService;

  constructor(pricingService: PricingService) {
    this.pricingService = pricingService;
  }

  addItem(itemId: string): void {
    this.items.push(itemId);
  }

  getTotalCost(): number {
    return this.items.reduce((total, itemId) => {
      return total + this.pricingService.getPrice(itemId);
    }, 0);
  }
}
