import React from 'react';
import eyes from 'eyes.it';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {textLinkTestkitFactory} from '../../testkit/protractor';

const storyUrl = getStoryUrl('5. Buttons', '5.8 Text Link');
const driver = textLinkTestkitFactory({dataHook: 'storybook-textlink'});

describe('TextLink', () => {
  beforeAll(() => browser.get(storyUrl));

  beforeEach(async () => {
    autoExampleDriver.reset();
    await waitForVisibilityOf(driver.element(), 'Cannot find TextLink component');
  });

  eyes.it('should render', async () => {
    expect(await driver.getText()).toMatch('Click to visit wix.com');
  });

  eyes.it('should show underline on hover', async () => {
    driver.hover();
  });

  eyes.it('should render prefix & sufix', async () => {
    await autoExampleDriver.setProps({
      prefixIcon: <div>prefix</div>,
      suffixIcon: <div>suffix</div>
    });

    expect(await driver.isPrefixIconExists()).toBe(true);
    expect(await driver.isSuffixIconExists()).toBe(true);
  });
});
