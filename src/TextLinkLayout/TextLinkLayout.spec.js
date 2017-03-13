import React from 'react';
import textLinkLayoutDriverFactory from './TextLinkLayout.driver';
import TextLinkLayout from './TextLinkLayout';
import {createDriverFactory} from '../test-common';
import {textLinkLayoutTestkitFactory} from '../../testkit';
import {textLinkLayoutTestkitFactory as enzymeTextLinkLayoutTestkitFactory} from '../../testkit/enzyme';
import {isTestkitExists, isEnzymeTestkitExists} from '../../testkit/test-common';

describe('TextLinkLayout', () => {

  const createDriver = createDriverFactory(textLinkLayoutDriverFactory);

  it('should have a textLinkLayout', () => {
    const driver = createDriver(<TextLinkLayout/>);

    expect(driver.exists()).toBeTruthy();
  });

  it('should render children', () => {
    const children = '<div>123</div>';
    const driver = createDriver(<TextLinkLayout link="">{children}</TextLinkLayout>);

    expect(driver.getContent()).toBe(children);
  });

  it('should be with medium size by defualt', () => {
    const driver = createDriver(<TextLinkLayout/>);
    expect(driver.getSize()).toBe('medium');
  });

  it('should be with small size', () => {
    const driver = createDriver(<TextLinkLayout size="small"/>);
    expect(driver.getSize()).toBe('small');
  });

  it('should be with dark background', () => {
    const driver = createDriver(<TextLinkLayout darkBackground size="small"/>);
    expect(driver.isDarkBackground()).toBeTruthy();
  });

  it('should be with light background', () => {
    const driver = createDriver(<TextLinkLayout size="small"/>);
    expect(driver.isLightBackground()).toBeTruthy();
  });

  it('should be with underline', () => {
    const driver = createDriver(<TextLinkLayout underlineStyle="always"/>);
    expect(driver.isUnderline()).toBeTruthy();
  });

  it('should not be with underline', () => {
    const driver = createDriver(<TextLinkLayout underlineStyle="never"/>);
    driver.hover();
    expect(driver.isUnderline()).toBeFalsy();
  });

  it('should not be with underline by defualt', () => {
    const driver = createDriver(<TextLinkLayout/>);
    expect(driver.isUnderline()).toBeFalsy();
  });

  it('should have underline on hover', () => {
    const driver = createDriver(<TextLinkLayout/>);
    driver.hover();
    expect(driver.isUnderline()).toBeTruthy();
  });
});

describe('testkit', () => {
  it('should exist', () => {
    expect(isTestkitExists(<TextLinkLayout/>, textLinkLayoutTestkitFactory)).toBe(true);
  });
});

describe('enzyme testkit', () => {
  it('should exist', () => {
    expect(isEnzymeTestkitExists(<TextLinkLayout/>, enzymeTextLinkLayoutTestkitFactory)).toBe(true);
  });
});
