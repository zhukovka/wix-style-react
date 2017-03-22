import eyes from 'eyes.it';
import {autoCompleteTestkitFactory, getStoryUrl, scrollToElement, waitForVisibilityOf} from '../../testkit/protractor';

describe('AutoComplete', () => {
  const storyUrl = getStoryUrl('Core', 'AutoComplete');
  const dataHook = 'story-autocomplete';

  eyes.it('should open autocomplete when it focused', () => {
    const driver = autoCompleteTestkitFactory({dataHook});

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cannot find AutoComplete')
    .then(() => {
      scrollToElement(driver.element());
      expect(driver.getDropdown().isDisplayed()).toBe(false);

      driver.click();
      browser.sleep(500);

      expect(driver.getDropdown().isDisplayed()).toBe(true);
      expect(driver.getDropdownItemsCount()).toEqual(5);

      driver.getInput().sendKeys('first');
      expect(driver.getDropdownItemsCount()).toEqual(1);

      expect(driver.getDropdownItem(0)).toBe('First option');
    });
  });

  eyes.it('should choose one of autocomplete items', () => {
    const driver = autoCompleteTestkitFactory({dataHook});

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cannot find AutoComplete')
    .then(() => {
      scrollToElement(driver.element());
      driver.click();
      driver.getDropdownItem(2).click();

      expect(driver.getInput().getAttribute('value')).toBe('Third option');
    });
  });
});
