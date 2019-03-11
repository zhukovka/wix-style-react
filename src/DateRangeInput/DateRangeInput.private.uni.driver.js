import { dateRangeInputDriverFactory as publicDriverFactory } from './DateRangeInput.uni.driver';
import { dateInputPrivateDriverFactory } from '../DateInput/test/DateInput.private.uni.driver';

export const dateRangeInputPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),
    getInputDriver: inputName =>
      dateInputPrivateDriverFactory(
        base.$(`[data-hook="date-${inputName}-input"]`),
      ).getInputDriver(),
    // Add here driver methods that considered "private"
  };
};
