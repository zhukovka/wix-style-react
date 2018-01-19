import eyes from 'eyes.it';
import {buttonTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../../testkit/protractor';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import React from 'react';

describe('Backoffice Button', () => {
  const storyUrl = getStoryUrl('5. Buttons', '5.1 Standard');
  const driver = buttonTestkitFactory({dataHook: 'storybook-button'});

  const wait = () => waitForVisibilityOf(driver.element(), 'Cannot find Button');

  beforeAll(() => browser.get(storyUrl));
  afterEach(() => autoExampleDriver.reset());

  eyes.it('should alert on click', () =>
    wait()
      .then(() => {
        autoExampleDriver.setProps({
          onClick: () => window.alert('clicked') // eslint-disable-line no-alert
        });

        driver.click();

        const alertDialog = browser.switchTo().alert();

        expect(alertDialog.getText()).toBe('clicked');
        alertDialog.dismiss();
      })
  );

  eyes.it('should render disabled', () =>
    wait()
      .then(() => {
        autoExampleDriver.setProps({disabled: true});
        expect(driver.isButtonDisabled()).toBe(true);
      })
  );

  eyes.it('should render disabled', () =>
    wait()
      .then(() => {
        autoExampleDriver.setProps({disabled: true});
        expect(driver.isButtonDisabled()).toBe(true);
      })
  );

  eyes.it('should render prefix & sufix', () =>
    wait()
      .then(() => {
        autoExampleDriver.setProps({
          prefixIcon: <div>prefix</div>,
          suffixIcon: <div>suffix</div>
        });

        expect(driver.isPrefixIconExists()).toBe(true);
        expect(driver.isSuffixIconExists()).toBe(true);
      })
  );
});
