import eyes from 'eyes.it';
import {checkboxTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';

describe('Checkbox', () => {
  const storyUrl = getStoryUrl('Core', 'Checkbox');

  eyes.it('should select first checkbox', () => {
    const driver = checkboxTestkitFactory({dataHook: 'story-checkbox-1'});

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cannot find Checkbox')
      .then(() => {
        driver.getLabel().click();
        expect(driver.isChecked()).toBe(true);

        driver.getLabel().click();
        expect(driver.isChecked()).toBe(false);
      });
  });

  eyes.it('should select second checkbox', () => {
    const driver = checkboxTestkitFactory({dataHook: 'story-checkbox-2'});

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cannot find Checkbox')
      .then(() => {
        driver.getLabel().click();
        expect(driver.isChecked()).toBe(true);

        driver.getLabel().click();
        expect(driver.isChecked()).toBe(false);
      });
  });

  eyes.it('should select third checkbox (two times selected)', () => {
    const driver = checkboxTestkitFactory({dataHook: 'story-checkbox-3'});

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cannot find Checkbox')
      .then(() => {
        driver.getLabel().click();
        expect(driver.isChecked()).toBe(true);

        driver.getLabel().click();
        expect(driver.isChecked()).toBe(true);

        driver.getLabel().click();
        expect(driver.isChecked()).toBe(false);
      });
  });
});
