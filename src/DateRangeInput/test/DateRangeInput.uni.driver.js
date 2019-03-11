import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dateInputPrivateDriverFactory } from '../../DateInput/test/DateInput.private.uni.driver';
import DateRangeInput from '../DateRangeInput';

export const dateRangeInputDriverFactory = base => {
  const getInputDriver = inputName => {
    return dateInputPrivateDriverFactory(
      base.$(`[data-hook="date-${inputName}-input"]`),
    );
  };
  const dateFromInputDriver = getInputDriver(DateRangeInput.InputFrom);
  const dateToInputDriver = getInputDriver(DateRangeInput.InputTo);
  return {
    ...baseUniDriverFactory(base),
    /** Get the current count */
    getDateFromValue: () => dateFromInputDriver.getValue(),
    getDateToValue: () => dateToInputDriver.getValue(),
    getDateFromPlaceholder: async () =>
      await dateFromInputDriver.getInputDriver().input.attr('placeholder'),
    getDateToPlaceholder: async () =>
      await dateToInputDriver.getInputDriver().input.attr('placeholder'),
    clickOnDateFromInput: () =>
      dateFromInputDriver.getInputDriver().clickOnInput(),
    clickOnDateToInput: () => dateToInputDriver.getInputDriver().clickOnInput(),
  };
};
