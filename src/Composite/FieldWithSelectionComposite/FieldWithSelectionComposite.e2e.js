import eyes from 'eyes.it';
import { fieldWithSelectionCompositeTestkitFactory } from '../../../testkit/protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { createStoryUrl } from '../../../test/utils/storybook-helpers';
import { storySettings } from '../../../stories/FieldWithSelectionComposite/storySettings';
import inputDriverFactory from '../../Input/Input.protractor.driver';
import checkboxDriverFactory from '../../Checkbox/Checkbox.protractor.driver';
import dropdownDriverFactory from '../../Dropdown/Dropdown.protractor.driver';

const fieldWithSelectionCompositeTestkitE2EFactory = driver => {
  const inputDriver = () => inputDriverFactory(driver.getInput());
  const checkboxDriver = () =>
    checkboxDriverFactory(
      driver.element().$(`[data-hook="${storySettings.dataHookCheckbox}"]`),
    );
  const dropdownDriver = () => dropdownDriverFactory(driver.getSelection());

  return {
    ...driver,
    checkboxType: {
      isFocusedFirst: () => inputDriver().isFocused(),
      isFocusedLast: () => checkboxDriver().isFocused(),
      clickFirst: () => inputDriver().click(),
      clickLast: () => checkboxDriver().click(),
    },
    dropdownType: {
      isFocusedFirst: () => inputDriver().isFocused(),
      isFocusedLast: () => dropdownDriver().isFocused(),
      clickFirst: () => inputDriver().click(),
      clickLast: () => dropdownDriver().click(),
    },
  };
};

describe('FieldWithSelectionComposite', () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.category,
    story: storySettings.storyName,
  });

  const driverCheckbox = fieldWithSelectionCompositeTestkitE2EFactory(
    fieldWithSelectionCompositeTestkitFactory({
      dataHook: storySettings.dataHookExampleCheckbox,
    }),
  );
  const driverDropdown = fieldWithSelectionCompositeTestkitE2EFactory(
    fieldWithSelectionCompositeTestkitFactory({
      dataHook: storySettings.dataHookExampleDropdown,
    }),
  );
  const pressTab = () =>
    browser
      .actions()
      .sendKeys(protractor.Key.TAB)
      .perform();

  beforeAll(async () => {
    await browser.get(storyUrl);
    await waitForVisibilityOf(
      driverCheckbox.element(),
      'Cannot find FieldWithSelectionComposite - checkbox',
    );
    await waitForVisibilityOf(
      driverDropdown.element(),
      'Cannot find FieldWithSelectionComposite - dropdown',
    );
  });

  describe('Checkbox type', () => {
    const driver = driverCheckbox.checkboxType;
    eyes.it('should have default props', async () => {
      expect(driver.isFocusedFirst()).toBe(false, 'isFocused');
      expect(driver.isFocusedLast()).toBe(false, 'isFocused');
    });

    eyes.it('should show focused styles for first item', async () => {
      expect(driver.isFocusedFirst()).toBe(false);
      await driver.clickFirst();
      expect(driver.isFocusedFirst()).toBe(true);
    });

    eyes.it('should show focused styles for last item', async () => {
      expect(driver.isFocusedLast()).toBe(false);
      await pressTab();
      expect(driver.isFocusedLast()).toBe(true);
    });
  });

  describe('Dropdown type', () => {
    const driver = driverDropdown.dropdownType;
    eyes.it('should have default props', async () => {
      expect(driver.isFocusedFirst()).toBe(false, 'isFocusedFirst');
      expect(driver.isFocusedLast()).toBe(false, 'isFocusedLast');
    });

    eyes.it('should show focused styles for first item', async () => {
      expect(driver.isFocusedFirst()).toBe(false);
      await driver.clickFirst();
      expect(driver.isFocusedFirst()).toBe(true);
    });

    eyes.it('should show focused styles for last item', async () => {
      expect(driver.isFocusedLast()).toBe(false);
      await driver.clickLast();
      await driver.clickLast(); // TODO: temporary :)
      expect(driver.isFocusedLast()).toBe(true);
    });
  });
});
