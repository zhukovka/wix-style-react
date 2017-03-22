import eyes from 'eyes.it';
import {dropdownTestkitFactory, getStoryUrl, scrollToElement, waitForVisibilityOf} from '../../testkit/protractor';

describe('Dropdown', () => {
  const storyUrl = getStoryUrl('Core', 'Dropdown');
  const dataHook = 'story-dropdown';

  eyes.it('should choose different dropdown items', () => {
    const driver = dropdownTestkitFactory({dataHook});

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cannot find Dropdown')
      .then(() => {
        scrollToElement(driver.element());
        expect(driver.getInput().getAttribute('value')).toBe('');

        driver.click();
        driver.getDropdownItem(1).click();
        expect(driver.getInput().getAttribute('value')).toBe('Option 2');

        driver.click();
        driver.getDropdownItem(2).click();
        expect(driver.getInput().getAttribute('value')).toBe('Option 3');

        //choose a disabled option
        driver.click();
        driver.getDropdownItem(3).click();
        expect(driver.getInput().getAttribute('value')).toBe('Option 3');
      });
  });
});
