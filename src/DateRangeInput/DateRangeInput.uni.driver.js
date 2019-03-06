import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dateInputPrivateDriverFactory } from '../DateInput/DateInput.private.uni.driver';

export const dateRangeInputDriverFactory = base => {
  const getInputDriver = inputName => {
    return dateInputPrivateDriverFactory(
      base.$(`[data-hook="date-${inputName}-input"]`),
    );
  };
  return {
    ...baseUniDriverFactory(base),
    /** Get the current count */
    getDateFromValue: async () => await getInputDriver('from').getValue(),
    getDateToValue: async () => await getInputDriver('to').getValue(),
    clickOnDateFromInput: async () =>
      await getInputDriver('from')
        .getInputDriver()
        .clickOnInput(),
    clickOnDateToInput: async () =>
      await getInputDriver('to')
        .getInputDriver()
        .clickOnInput(),
  };
};
