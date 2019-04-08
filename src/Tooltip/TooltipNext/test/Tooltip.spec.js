import React from 'react';
import {
  createRendererWithUniDriver,
  cleanup,
} from '../../../../test/utils/unit';

import Tooltip from '../Tooltip';
import { tooltipPrivateDriverFactory } from './Tooltip.private.uni.driver';

import Button from '../../../Button';

describe('Tooltip', () => {
  const render = createRendererWithUniDriver(tooltipPrivateDriverFactory);

  const children = <Button>content</Button>;

  const tooltip = (props = {}) => {
    return (
      <Tooltip enterDelay={0} content="string" children={children} {...props} />
    );
  };

  afterEach(() => {
    cleanup();
  });

  describe('`content` prop', () => {
    it('should render string inside tooltip element [when] string is given', async () => {
      const kiddo = 'string';
      const { driver } = render(tooltip({ children: kiddo }));
      await driver.mouseEnter();
      expect(await driver.getTooltipText()).toBe('string');
    });
    it('should render string inside tooltip element [when] react element is given', async () => {
      const kiddo = <div>string</div>;
      const { driver } = render(tooltip({ children: kiddo }));
      await driver.mouseEnter();
      expect(await driver.getTooltipText()).toBe('string');
    });
  });

  describe('`children` is disabled', () => {
    it('should not show tooltip on mouse enter [when] given react component', async () => {
      const kiddo = <Button disabled>Disabled</Button>;
      const { driver } = render(tooltip({ children: kiddo }));
      await driver.mouseEnter();
      expect(await driver.tooltipExists()).toBe(false);
    });
    it('should not show tooltip on mouse enter [when] react element', async () => {
      const kiddo = <button disabled>Disabled</button>;
      const { driver } = render(tooltip({ children: kiddo }));
      await driver.mouseEnter();
      expect(await driver.tooltipExists()).toBe(false);
    });
  });
});
