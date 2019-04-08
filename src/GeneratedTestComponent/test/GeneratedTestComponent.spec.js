import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import GeneratedTestComponent from '../GeneratedTestComponent';
import { generatedTestComponentPrivateDriverFactory } from './GeneratedTestComponent.private.uni.driver';

describe('GeneratedTestComponent', () => {
  const render = createRendererWithUniDriver(
    generatedTestComponentPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<GeneratedTestComponent />);

    expect(await driver.exists()).toBeTruthy();
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const { driver } = render(<GeneratedTestComponent />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<GeneratedTestComponent buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
