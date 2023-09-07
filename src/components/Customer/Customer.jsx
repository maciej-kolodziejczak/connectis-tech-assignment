import { useCustomerPoints } from "./useCustomerPoints";

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
