import { dateInputDriverFactory as publicDriverFactory } from './DateInput.driver';

export const dateInputPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
