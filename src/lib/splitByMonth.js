/**
 * @typedef {import('./generateData').Transaction} Transaction
 */

/**
 * @param {Transaction[]} transactions
 * @returns {Map<string, Transaction[]>}
 */
export function splitByMonth(transactions) {
  return transactions.reduce((acc, transaction) => {
    const month = transaction.date.slice(0, 7);

    if (!acc.has(month)) {
      acc.set(month, []);
    }

    acc.get(month).push(transaction);

    return acc;
  }, new Map());
}