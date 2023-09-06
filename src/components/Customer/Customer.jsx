import { calculatePoints } from "../../lib/calculatePoints";
import { awardPoints } from "../../lib/awardPoints";

/**
 * @typedef {import ('../../lib/generateData').Customer} Customer
 * @param {Customer} customer
 */
function useCustomerPoints(customer) {
  const calcFn = calculatePoints(awardPoints);

  function generateMonthName(year, month) {
    const date = new Date(year, month - 1);
    return date.toLocaleString("default", { month: "long", year: "numeric" });
  }

  return customer.transactions.map((period) => ({
    period: generateMonthName(period.year, period.month),
    points: calcFn(period.transactions),
  }));
}

/**
 * @typedef {(import ('../../lib/generateData').Customer)} Customer
 * @param {{ customer: Customer }} props
 */
export function Customer({ customer }) {
  const points = useCustomerPoints(customer);

  return (
    <div>
      <h2>{customer.name}</h2>
      <ul>
        {points.map(({ period, points }) => (
          <li key={`${customer.id}-${period}`}>
            {period}: {points}
          </li>
        ))}
        <li>
          <strong>
            Total: {points.reduce((acc, { points }) => acc + points, 0)}
          </strong>
        </li>
      </ul>
    </div>
  );
}
