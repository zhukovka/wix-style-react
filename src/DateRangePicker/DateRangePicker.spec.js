import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import DateRangePicker from './DateRangePicker';
import { dateRangePickerPrivateDriverFactory } from './DateRangePicker.driver.private';

describe('DateRangePicker', () => {
  const createDriver = createUniDriverFactory(
    dateRangePickerPrivateDriverFactory,
  );

  it('should render', async () => {
    const driver = createDriver(<DateRangePicker />);

    expect(await driver.exists()).toBeTruthy();
  });
});
