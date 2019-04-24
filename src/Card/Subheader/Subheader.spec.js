import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import Subheader from './Subheader';
import { subheaderDriverFactory } from './Subheader.uni.driver';

describe('Subheader', () => {
  const render = createRendererWithUniDriver(subheaderDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<Subheader title="title" />);

    expect(await driver.exists()).toBeTruthy();
  });

  describe('`title` prop', () => {
    it('should render as string', async () => {
      const { driver } = render(<Subheader title="title" />);
      expect(await driver.title()).toBe('title');
    });

    it('should render as component', async () => {
      const { driver } = render(<Subheader title={<span>hello world</span>} />);
      expect(await (await driver.titleNode()).text()).toBe('hello world');
    });
  });
});
