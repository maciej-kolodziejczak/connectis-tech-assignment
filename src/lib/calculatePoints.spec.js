import { calculatePoints } from './calculatePoints';

describe('calculatePoints', () => {
  test('should calculate using the given formula per record', () => {
    const formula = v => v + 2;
    const result = calculatePoints(formula)([
      { amount: 100 },
      { amount: 200 },
    ]);
    expect(result).toBe(304);
  });
});