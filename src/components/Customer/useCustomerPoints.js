import { calculatePoints } from "../../lib/calculatePoints";
import { awardPoints } from "../../lib/awardPoints";

function generateMonthName(year, month) {
  const date = new Date(year, month - 1);
  return date.toLocaleString("default", { month: "long", year: "numeric" });
}

/**
 * @typedef {import ('../../lib/generateData').Customer} Customer
 * @param {Customer} customer
 */
export function useCustomerPoints(customer) {
  const calcFn = calculatePoints(awardPoints);

  return customer.transactions.map((period) => ({
    period: generateMonthName(period.year, period.month),
    points: calcFn(period.transactions),
  }));
}
