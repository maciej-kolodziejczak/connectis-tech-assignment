import { awardPoints } from './awardPoints';

describe('awardPoints', () => {
  test('should return 0 points if spent below 50$', () => {
    const result = awardPoints(49);
    expect(result).toBe(0);
  });

  test('should return 1 point for each dollar spent over $50', () => {
    const result = awardPoints(57);
    expect(result).toBe(7);
  });

  test('should return 2 points for each dollar spent over $100', () => {
    const result = awardPoints(120);
    expect(result).toBe(90);
  });
});