/**
 * @description
 * These functions handle conversions to and from epoch seconds.
 *
 * We use epoch seconds (Unix timestamp) to:
 * 1. Avoid timezone complexities: Epoch seconds are UTC-based and timezone-agnostic.
 * 2. Simplify backend operations: No need to handle various date formats or timezone conversions.
 * 3. Ensure consistency: Provides a uniform way to store and compare timestamps across the system.
 * 4. Improve performance: Integer comparisons are faster than date object comparisons.
 *
 * This approach helps maintain data integrity and simplifies time-based calculations in our backend.
 */

export const getCurrentEpochSeconds = (): number => {
  return Math.round(new Date().getTime() / 1000);
};

export const getEpochSecondsFromDate = (date?: Date | null): number => {
  if (!date) return 0;

  return Math.round(date.getTime() / 1000);
};

export const getDateFromEpochSeconds = (epochSeconds: number): Date => {
  return new Date(epochSeconds * 1000);
};

/**
 * @description
 * Converts a date string in the format '2024-08-02T17:00:38.015Z' to epoch seconds.
 */
export const getEpochSecondsFromDateString = (dateString: string): number => {
  const date = new Date(dateString);
  return Math.round(date.getTime() / 1000);
};
