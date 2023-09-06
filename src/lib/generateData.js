import { faker } from "@faker-js/faker";

/**
 * Generates a single transaction.
 *
 * @typedef {{
 *  id: string,
 *  amount: number,
 *  date: Date,
 * }} Transaction
 *
 * @returns {Transaction}
 */
function generateTransaction() {
  return {
    id: faker.string.uuid(),
    amount: faker.number.int({ min: 1, max: 1000 }),
    date: faker.date.recent({ days: 90 }),
  };
}

/**
 * Generates a single customer with random number of transactions.
 *
 * @typedef {{
 *  id: string,
 *  name: string,
 *  transactions: {
  *    month: number,
  *    year: number,
  *    transactions: Transaction[]
 *  }[],
 * }} Customer
 *
 * @returns {Customer}
 */
function generateCustomer() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    transactions: [
      {
        month: 8,
        year: 2023,
        transactions: generateTransactions(),
      },
      {
        month: 7,
        year: 2023,
        transactions: generateTransactions(),
      },
      {
        month: 6,
        year: 2023,
        transactions: generateTransactions(),
      },
    ],
  };
}

/**
 * @returns {Transaction[]}
 */
function generateTransactions() {
  const transactionAmount = faker.number.int({ min: 1, max: 50 });
  return Array.from({ length: transactionAmount }, generateTransaction);
}

/**
 * Generate data for the app.
 * Wrapped with a Promise to simulate an async operation.
 *
 * @param {number} amount
 * @returns {Promise<Customer[]>}
 */
export function generateData(amount = 100) {
  return Promise.resolve(Array.from({ length: amount }, generateCustomer));
}

/**
 * Fail to generate data for the app.
 * Wrapped with a Promise to simulate an async operation.
 *
 * @returns {Promise<Customer[]>}
 */
export function generateDataFail() {
  return Promise.reject(new Error("Failed to generate data"));
}
