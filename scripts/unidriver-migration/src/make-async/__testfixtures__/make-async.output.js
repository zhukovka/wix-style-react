import React from 'react';
import { compPrivateDriverFactory } from './Comp.private.uni.driver';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import Comp from './Comp';

describe('foo', () => {
  const createDriver = createUniDriverFactory(compPrivateDriverFactory);
  it('bar1', async () => {
    const driver = createDriver(<Comp />);
    await driver.someMethod();
    expect(await driver.someOtherMethod()).toBeTruthy();
  });

  it('already has asyc', async () => {
    const driver = createDriver(<Comp />);
    await driver.someMethod();
    expect(await driver.someOtherMethod()).toBeTruthy();
  });
});

describe('foo', () => {
  it('bar', async () => {});
  it('bar', async () => {});
});
