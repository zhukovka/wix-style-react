import React from 'react';
import badgeDriverFactory from './Badge.driver';
import Badge from './Badge';
import {createDriverFactory} from '../test-common';

describe('Badge', () => {

  const createDriver = createDriverFactory(badgeDriverFactory);

  it('should render a badge', () => {
    const driver = createDriver(<Badge>Hello World</Badge>);
    expect(driver.text()).toEqual('Hello World');
  });

  it('should allow specifying a type', () => {
    const driver = createDriver(<Badge type="warning">Hello World</Badge>);
    expect(driver.isOfType('warning')).toBeTruthy();
  });

  it('should allow specifying an alignment', () => {
    const driver = createDriver(<Badge alignment="bottom">Hello World</Badge>);
    expect(driver.isOfAlignment('bottom')).toBeTruthy();
  });

  it('should allow specifying an appearance', () => {
    const driver = createDriver(<Badge appearance="H1">Hello World</Badge>);
    expect(driver.isOfAppearance('H1')).toBeTruthy();
  });

});
