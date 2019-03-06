import { dateRangeInputDriverFactory as publicDriverFactory } from './DateRangeInput.uni.driver';

export const dateRangeInputPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
