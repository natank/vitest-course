// logger.ts

import { formatter } from "./formatter";

export function logger(message: string): void {
  const formattedMessage = formatter(message);
  console.log(formattedMessage);
}
