/**
 * @typedef {import('./generateData').Transaction} Transaction
 */

/**
 * @param {(v: number) => number} formula
 * @returns {(transactions: Transaction[]) => number}
 */
export function calculatePoints(formula) {
  return function (transactions) {
    return transactions.reduce((acc, { amount }) => {
      return acc + formula(amount);
    }, 0);
  };
}
