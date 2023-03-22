import { Transaction } from "@/context/context";

export const countTransactionTypeAmount = (
  data: Transaction[],
  type?: string
): number => {
  return data.reduce((acc, element) => {
    if (!type) {
      return (acc += Number(element.amount));
    }
    if (type === "-" && element.amount[0] === type) {
      return (acc += Math.abs(Number(element.amount)));
    }
    return acc;
  }, 0);
};
