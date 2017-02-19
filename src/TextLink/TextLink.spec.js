import React from 'react';
import textLinkDriverFactory from './TextLink.driver';
import TextLink from './TextLink';
import {createDriverFactory} from '../test-common';
import {textLinkTestkitFactory} from '../../testkit';
import {textLinkTestkitFactory as enzymeTextLinkTestkitFactory} from '../../testkit/enzyme';
import {isTestkitExists, isEnzymeTestkitExists} from '../../testkit/test-common';

describe('TextLink', () => {

  const createDriver = createDriverFactory(textLinkDriverFactory);

  it('should have a textLink', () => {
    const driver = createDriver(<TextLink/>);

    expect(driver.exists()).toBeTruthy();
  });

  it('should render children', () => {
    const children = '<div>123</div>';
    const driver = createDriver(<TextLink>{children}</TextLink>);

    expect(driver.getContent()).toBe(children);
  });

  it('should be with medium size by defualt', () => {
    const driver = createDriver(<TextLink/>);
    expect(driver.getSize()).toBe('medium');
  });

  it('should be with small size', () => {
    const driver = createDriver(<TextLink size="small"/>);
    expect(driver.getSize()).toBe('small');
  });

  it('should be with dark background', () => {
    const driver = createDriver(<TextLink darkBackground size="small"/>);
    expect(driver.isDarkBackground()).toBeTruthy();
  });

  it('should be with light background', () => {
    const driver = createDriver(<TextLink size="small"/>);
    expect(driver.isLightBackground()).toBeTruthy();
  });

  it('should be with underline', () => {
    const driver = createDriver(<TextLink forceUnderline/>);
    expect(driver.isUnderline()).toBeTruthy();
  });

  it('should not be with underline by defualt', () => {
    const driver = createDriver(<TextLink/>);
    expect(driver.isUnderline()).toBeFalsy();
  });

  it('should have underline on hover', () => {
    const driver = createDriver(<TextLink/>);
    driver.hover();
    expect(driver.isUnderline()).toBeTruthy();
  });

  it('should have a link', () => {
    const driver = createDriver(<TextLink link="https://www.wix.com"/>);
    expect(driver.getLink()).toBe('https://www.wix.com/');
  });
});

describe('testkit', () => {
  it('should exist', () => {
    expect(isTestkitExists(<TextLink/>, textLinkTestkitFactory)).toBe(true);
  });
});

describe('enzyme testkit', () => {
  it('should exist', () => {
    expect(isEnzymeTestkitExists(<TextLink/>, enzymeTextLinkTestkitFactory)).toBe(true);
  });
});
