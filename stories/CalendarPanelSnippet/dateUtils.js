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
export const LAST_WEEK = cloneWithDaysOffset(TODAY, -7);
