import eyes from 'eyes.it';
import {buttonSelectionTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';

describe('Button Selection', () => {
  const storyUrl = getStoryUrl('Core', 'ButtonSelection');
  const dataHook = 'story-button-selection';

  eyes.it('should highlight the selected button on click', () => {
    const driver = buttonSelectionTestkitFactory({dataHook});

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cant find Button Selection Component')
      .then(() => {
        expect(driver.getSelectedButtonText()).toBe('Button 3');
        driver.clickButtonByIndex(0);
        expect(driver.getSelectedButtonText()).toBe('Button 1');
      });
  });
});
