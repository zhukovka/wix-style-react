import {toggleSwitchTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';
import eyes from 'eyes.it';

describe('toggle switch page', () => {
  const storyUrl = getStoryUrl('Core', 'ToggleSwitch');

  const smallSwitchDataHook = 'controlled-switch-small';
  const largeSwitchDataHook = 'controlled-switch-large';

  eyes.it('should render small toggle switch', () => {
    const driver = toggleSwitchTestkitFactory({dataHook: smallSwitchDataHook});
    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cant find ToggleSwitch')
      .then(() => {
        expect(driver.isSmall()).toBe(true);
      });
  });

  eyes.it('should render large switch', () => {
    const driver = toggleSwitchTestkitFactory({dataHook: largeSwitchDataHook});
    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cant find ToggleSwitch')
      .then(() => {
        expect(driver.isLarge()).toBe(true);
      });
  });

  eyes.it('should change state on click', () => {
    const driver = toggleSwitchTestkitFactory({dataHook: smallSwitchDataHook});
    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cant find ToggleSwitch')
      .then(() => {
        expect(driver.checked()).toBe(false);
        driver.click();
        expect(driver.checked()).toBe(true);
      });
  });

});
