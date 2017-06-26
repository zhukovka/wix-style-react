import eyes from 'eyes.it';
import {buttonTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../../testkit/protractor';

describe('Backoffice Button', () => {
  const storyUrl = getStoryUrl('Backoffice', 'Button');
  const beforeClickState = 'Click Me!';
  const clickedState = 'Clicked!';

  eyes.it('should click a button', () => {
    const dataHook = 'story-button-enabled';
    const driver = buttonTestkitFactory({dataHook});

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cannot find Button')
      .then(() => {
        expect(driver.getButtonTextContent()).toBe(beforeClickState);
        driver.click();
        expect(driver.getButtonTextContent()).toBe(clickedState);
      });
  });

  eyes.it('should render disabled, suffixIcon, prefixIcon buttons correctly', () => {
    const dataHookDisabled = 'story-button-disabled';
    const dataHookPrefix = 'story-button-prefix';
    const dataHookSuffix = 'story-button-suffix';
    const driverDisabled = buttonTestkitFactory({dataHook: dataHookDisabled});
    const driverPrefix = buttonTestkitFactory({dataHook: dataHookPrefix});
    const driverSuffix = buttonTestkitFactory({dataHook: dataHookSuffix});

    // browser.get(storyUrl);
    waitForVisibilityOf([driverDisabled.element(), driverPrefix.element(), driverSuffix.element()], 'Cannot find Button')
      .then(() => {
        expect(driverDisabled.isButtonDisabled()).toBe(true);
        expect(driverPrefix.isPrefixIconExists()).toBe(true);
        expect(driverSuffix.isSuffixIconExists()).toBe(true);
      });
  });
});
