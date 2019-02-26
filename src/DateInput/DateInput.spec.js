import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import DateInput from './DateInput';
import { dateInputPrivateDriverFactory } from './DateInput.driver.private';

describe('DateInput', () => {
  const createDriver = createUniDriverFactory(dateInputPrivateDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<DateInput />);
    expect(await driver.exists()).toBeTruthy();
  });
});
