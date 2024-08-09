export function bigPizza(amount: number): string {
  return `Here is your ${amount} awesome Big Pizza${amount > 1 ? "s" : ""}`;
}

export function mediumPizza(amount: number): string {
  return `Here is your ${amount} Medium Pizza${amount > 1 ? "s" : ""}`;
}

export function smallPizza(amount: number): string {
  return `Here is your ${amount} Small Pizza${amount > 1 ? "s" : ""}`;
}
