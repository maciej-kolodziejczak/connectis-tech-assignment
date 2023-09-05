const TIER1_THRESHOLD = 50;
const TIER1_REWARD = 1;
const TIER2_THRESHOLD = 100;
const TIER2_REWARD = 2;

/**
 * @param {number} amount 
 * @returns {number}
 */
export function awardPoints(amount) {
  if (amount <= TIER1_THRESHOLD) {
    return 0;
  }

  if (amount <= TIER2_THRESHOLD) {
    return (amount - TIER1_THRESHOLD) * TIER1_REWARD;
  }

  return (TIER2_THRESHOLD - TIER1_THRESHOLD) * TIER1_REWARD + (amount - TIER2_THRESHOLD) * TIER2_REWARD;
}
