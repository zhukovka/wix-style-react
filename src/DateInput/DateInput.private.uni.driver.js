import { dateInputDriverFactory as publicDriverFactory } from './DateInput.uni.driver';
import { testkit as inputTestKit } from '../Input/Input.uni.driver';

export const dateInputPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),
    hasDateIcon: () => base.$('[data-hook="date-input-date-icon"]').exists(),
    getInputDriver: () => inputTestKit(base),
    // Add here driver methods that considered "private"
  };
};
