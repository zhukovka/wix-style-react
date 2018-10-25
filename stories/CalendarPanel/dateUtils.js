/**
 * These utils are for consumers (for stories or sketching)
 * Not intended to be production code.
 */
export function cloneWithDaysOffset(dateObj, offset) {
  const newDate = new Date(dateObj.getTime());
  newDate.setDate(dateObj.getDate() + offset);
  return newDate;
}

export const TODAY = new Date();
export const NEXT_WEEK = cloneWithDaysOffset(TODAY, 7);
export const A_WEEK_AGO = cloneWithDaysOffset(TODAY, -7);
export const ONE_MONTH_AGO = cloneWithDaysOffset(TODAY, -30);
export const TWO_MONTH_AGO = cloneWithDaysOffset(TODAY, -60);
