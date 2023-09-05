import { splitByMonth } from "./splitByMonth";

describe("splitByMonth", () => {
  test('should split transactions by month', () => {
    const transactions = [
      { date: '2020-01-01' },
      { date: '2020-01-31' },
      { date: '2020-02-28' },
      { date: '2020-03-01' },
    ];
    const expected = new Map([
        ['2020-01', [
          { date: '2020-01-01' },
          { date: '2020-01-31' },
        ]],
        ['2020-02', [
          { date: '2020-02-28' },
        ]],
        ['2020-03', [
          { date: '2020-03-01' },
        ]],
      ])
    const result = splitByMonth(transactions);
    expect(result).toEqual(expected);
  });
});