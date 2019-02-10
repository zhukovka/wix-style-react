import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import MaterialInput from './MaterialInput';
import { materialInputPrivateDriverFactory } from './MaterialInput.driver.private';

describe('MaterialInput', () => {
  const createDriver = createUniDriverFactory(materialInputPrivateDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<MaterialInput />);

    expect(await driver.exists()).toBeTruthy();
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const driver = createDriver(<MaterialInput />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button 2 times',
    );
  });

  it('should allow changing the button text', async () => {
    const driver = createDriver(<MaterialInput buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});

