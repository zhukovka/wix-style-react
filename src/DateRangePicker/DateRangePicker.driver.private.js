import { dateRangePickerDriverFactory as publicDriverFactory } from './DateRangePicker.driver';

export const dateRangePickerPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
