import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import DateInput from './DateInput';
import { dateInputPrivateDriverFactory } from './DateInput.driver.private';
import { formatDate } from '../LocaleUtils';

describe('DateInput', () => {
  const createDriver = createUniDriverFactory(dateInputPrivateDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<DateInput />);
    expect(await driver.exists()).toBeTruthy();
  });

  it('should format date based on locale', async () => {
    const sampleDate = new Date().toString();
    const locale = 'ru';
    const dateFormat = 'HH:MM';
    const driver = createDriver(
      <DateInput value={sampleDate} dateFormat={dateFormat} locale={locale} />,
    );
    expect(await driver.getValue()).toEqual(
      formatDate(sampleDate, dateFormat, locale),
    );
  });

  it('should format date based on formating function', async () => {
    const sampleDate = new Date().toString();
    const dateFormat = () => 'Some other string';
    const driver = createDriver(
      <DateInput value={sampleDate} dateFormat={dateFormat} />,
    );
    expect(await driver.getValue()).toEqual(dateFormat(sampleDate));
  });
});
