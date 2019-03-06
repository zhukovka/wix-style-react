import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import DateRangeInput from './DateRangeInput';
import { dateRangeInputPrivateDriverFactory } from './DateRangeInput.private.uni.driver';

describe('DateRangeInput', () => {
  const createDriver = createUniDriverFactory(
    dateRangeInputPrivateDriverFactory,
  );

  it('should display `from` value', async () => {
    const value = {
      from: new Date(0),
      to: null,
    };
    const format = 'DD/MM/YYYY';
    const driver = createDriver(
      <DateRangeInput dateFormat={format} value={value} />,
    );
    expect(await driver.getDateFromValue()).toEqual('01/01/1970');
  });

  it('should display `to` value', async () => {
    const value = {
      from: null,
      to: new Date(0),
    };
    const format = 'DD/MM/YYYY';
    const driver = createDriver(
      <DateRangeInput dateFormat={format} value={value} />,
    );
    expect(await driver.getDateToValue()).toEqual('01/01/1970');
  });

  it('date format should be the same for both inputs', async () => {
    const date = new Date(0);
    const value = {
      from: date,
      to: date,
    };
    const format = 'DD-MM-YYYY';
    const formattedDate = '01-01-1970';
    const driver = createDriver(
      <DateRangeInput dateFormat={format} value={value} />,
    );
    expect(await driver.getDateFromValue()).toEqual(formattedDate);
    expect(await driver.getDateToValue()).toEqual(formattedDate);
  });

  it('should call onDateFromClicked when `from` input clicked', async () => {
    const onChange = jest.fn();
    const driver = createDriver(
      <DateRangeInput onDateFromClicked={onChange} />,
    );
    await driver.clickOnDateFromInput();
    expect(onChange).toHaveBeenCalled();
  });

  it('should call onDateToClicked when `to` input clicked', async () => {
    const onChange = jest.fn();
    const driver = createDriver(<DateRangeInput onDateToClicked={onChange} />);
    await driver.clickOnDateToInput();
    expect(onChange).toHaveBeenCalled();
  });

  it('should set status to both inputs', async () => {
    const onChange = jest.fn();
    const driver = createDriver(<DateRangeInput status="error" />);
    expect(await driver.getInputDriver('from')).toHaveBeenCalled();
  });
});
