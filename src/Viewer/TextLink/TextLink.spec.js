import React from 'react';
import textLinkDriverFactory from './TextLink.driver';
import TextLink from './TextLink';
import {createDriverFactory} from '../../test-common';
import {textLinkTestkitFactory} from '../../../testkit';
import {textLinkTestkitFactory as enzymeTextLinkTestkitFactory} from '../../../testkit/enzyme';
import {isTestkitExists, isEnzymeTestkitExists} from '../../../testkit/test-common';

describe('TextLink', () => {

  const createDriver = createDriverFactory(textLinkDriverFactory);

  it('should have a textLink', () => {
    const driver = createDriver(<TextLink link=""/>);

    expect(driver.exists()).toBeTruthy();
  });

  it('should render children', () => {
    const children = '<div>123</div>';
    const driver = createDriver(<TextLink link="">{children}</TextLink>);

    expect(driver.getContent()).toBe(children);
  });

  it('should return the default color', () => {
    const defaultColor = 'rgb(24, 210, 222)';
    const driver = createDriver(<TextLink link="https://www.wix.com"/>);
    expect(driver.getColor()).toBe(defaultColor);
  });

  it('should replace the default color', () => {
    const newColor = 'rgb(56, 153, 255)';
    const driver = createDriver(<TextLink link="https://www.wix.com" color={newColor}/>);
    expect(driver.getColor()).toBe(newColor);
  });

  it('should replace the default hover color on hover', () => {
    const newHoverColor = 'rgb(177, 221, 100)';
    const driver = createDriver(<TextLink link="https://www.wix.com" hover={newHoverColor}/>);
    driver.hoverLink();
    expect(driver.getColor()).toBe(newHoverColor);
  });

  it('should return to back to the default hover color on mouse out', () => {
    const defaultColor = 'rgb(24, 210, 222)';
    const newHoverColor = 'rgb(177, 221, 100)';
    const driver = createDriver(<TextLink link="https://www.wix.com" hover={newHoverColor}/>);
    driver.hoverLink();
    driver.leaveLink();
    expect(driver.getColor()).toBe(defaultColor);
  });

});

describe('testkit', () => {
  it('should exist', () => {
    expect(isTestkitExists(<TextLink link=""/>, textLinkTestkitFactory)).toBe(true);
  });
});

describe('enzyme testkit', () => {
  it('should exist', () => {
    expect(isEnzymeTestkitExists(<TextLink link=""/>, enzymeTextLinkTestkitFactory)).toBe(true);
  });
});
