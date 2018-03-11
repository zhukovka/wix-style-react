import eyes from 'eyes.it';
import {toggleSwitchTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

describe('toggle switch page', () => {
  const storyUrl = getStoryUrl('4. Selection', '4.4 ToggleSwitch');
  const toggleSwitchDriver = toggleSwitchTestkitFactory({dataHook: 'storybook-toggleswitch'});

  async function setPropsAndWait(props) {
    await autoExampleDriver.setProps(props);
    await waitForVisibilityOf(toggleSwitchDriver.element(), 'Cant find ToggleSwitch');
  }

  beforeAll(() => {
    browser.get(storyUrl);
  });

  afterEach(async () => {
    await autoExampleDriver.reset();
    await browser.$('body').click();
    await waitForVisibilityOf(toggleSwitchDriver.element(), 'Cant find ToggleSwitch');
  });

  eyes.it('should render x-small toggle switch', async () => {
    await setPropsAndWait({size: 'x-small'});
    expect(toggleSwitchDriver.isXSmall()).toBe(true);
  });

  eyes.it('should render small toggle switch', async () => {
    await setPropsAndWait({size: 'small'});
    expect(toggleSwitchDriver.isSmall()).toBe(true);
  });

  eyes.it('should render large switch', async () => {
    await setPropsAndWait({size: 'large'});
    expect(toggleSwitchDriver.isLarge()).toBe(true);
  });

  eyes.it('should change state on click', async () => {
    expect(toggleSwitchDriver.checked()).toBe(false);
    await toggleSwitchDriver.click();
    expect(toggleSwitchDriver.checked()).toBe(true);
  });

  eyes.it('should be focused', async () => {
    expect(toggleSwitchDriver.isFocused()).toBe(false);
    await browser.actions().sendKeys(protractor.Key.TAB).perform();
    expect(toggleSwitchDriver.isFocused()).toBe(true);
  });
});
