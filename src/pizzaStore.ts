import { bigPizza, mediumPizza, smallPizza } from "./pizzaOven";

export function purchase(
  size: "big" | "medium" | "small",
  amount: number
): string {
  switch (size) {
    case "big":
      return bigPizza(amount);
    case "medium":
      return mediumPizza(amount);
    case "small":
      return smallPizza(amount);
    default:
      throw new Error("Invalid pizza size");
  }
}
