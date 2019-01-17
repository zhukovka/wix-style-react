import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import Box, { spacingUnit } from './Box';
import { boxPrivateDriverFactory } from './Box.driver.private';

describe('Box', () => {
  const createDriver = createUniDriverFactory(boxPrivateDriverFactory);

  describe('API', () => {
    it('should pass the inline style', async () => {
      const expectedOpacity = '0.5';
      const children = <span>Children</span>;
      const driver = createDriver(
        <Box style={{ opacity: expectedOpacity }}>{children}</Box>
      );

      expect(await driver.getStyle()).toContain(`opacity: ${expectedOpacity}`);
    });

    it('should pass the class name', async () => {
      const expectedClassName = 'some-selector';
      const children = <span>Children</span>;
      const driver = createDriver(
        <Box className={expectedClassName}>{children}</Box>
      );

      expect(await driver.hasClass(expectedClassName)).toBeTruthy();
    });

    it('should render the passed children', async () => {
      const children = <span>Children</span>;
      const driver = createDriver(
        <Box dataHook="box-child">{children}</Box>
      );

      expect(await driver.hasChild()).toBeTruthy();
    });
  });

  describe('formatSpacingValue function', () => {
    it('should render with padding when passing a numeric value', async () => {
      const expectedPadding = `${spacingUnit}px`;
      const children = <span>Children</span>;
      const driver = createDriver(
        <Box padding={1}>{children}</Box>
      );

      expect(await driver.getStyle()).toContain(`padding: ${expectedPadding}`);
    });

    it('should render with padding when passing a predefined spacing value', async () => {
      const expectedPadding = `${spacingUnit * 2}px`;
      const children = <span>Children</span>;
      const driver = createDriver(
        <Box padding="small">{children}</Box>
      );

      expect(await driver.getStyle()).toContain(`padding: ${expectedPadding}`);
    });

    it('should render with padding when passing space-separated values', async () => {
      const expectedPadding = `${spacingUnit * 3}px ${spacingUnit * 3}px`;
      const children = <span>Children</span>;
      const driver = createDriver(
        <Box padding={expectedPadding}>{children}</Box>
      );

      expect(await driver.getStyle()).toContain(`padding: ${expectedPadding}`);
    });
  });
});
