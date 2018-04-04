import eyes from 'eyes.it';
import {toggleSwitchTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import {runFocusTests} from '../common/Focusable/FocusableTestsE2E';

const NO_DESCRIPTION = '';

describe('ToggleSwitch', () => {
  const storyUrl = getStoryUrl('4. Selection', '4.4 ToggleSwitch');
  const toggleSwitchDriver = toggleSwitchTestkitFactory({dataHook: 'storybook-toggleswitch'});

  describe(NO_DESCRIPTION, () => {

    async function setPropsAndWait(props) {
      await autoExampleDriver.setProps(props);
      await waitForVisibilityOf(toggleSwitchDriver.element(), 'Cant find ToggleSwitch');
    }

    beforeEach(async () => {
    // TODO: We do browser.get() before EACH test in order to reset the focus.
    // implmement a generic solution in AutoExampleDriver that will do
    // propper reset of the focus, so we don't have to get the page,
    // and thus the test will run faster.
      await browser.get(storyUrl);
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

  describe('Generic', () => {
    runFocusTests(toggleSwitchDriver, storyUrl);
  });
});
