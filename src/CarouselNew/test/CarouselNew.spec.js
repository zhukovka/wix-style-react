import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import CarouselNew from '../CarouselNew';
import { carouselNewPrivateDriverFactory } from './CarouselNew.private.uni.driver';

describe('CarouselNew', () => {
  const render = createRendererWithUniDriver(carouselNewPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<CarouselNew />);

    expect(await driver.exists()).toBeTruthy();
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const { driver } = render(<CarouselNew />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<CarouselNew buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
