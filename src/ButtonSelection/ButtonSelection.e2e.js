import eyes from 'eyes.it';
import {buttonSelectionTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';

describe('Button Selection', () => {
  const storyUrl = getStoryUrl('Core', 'ButtonSelection');
  const dataHook = 'story-button-selection';

  eyes.it('should render correctly and highlight the selected button on click', () => {
    const driver = buttonSelectionTestkitFactory({dataHook});
    const buttonNames = ['Button 1', 'Button 2', 'Button 3'];
    const btnToSelect = buttonNames[0];

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cant find Button Selection Component')
      .then(() => {
        expect(driver.getButtonsNames()).toEqual(buttonNames);
        expect(driver.getSelectedButton()).toBe(buttonNames[2]);

        driver.selectByValue(btnToSelect);

        expect(driver.getSelectedButton()).toBe(btnToSelect);
      });
  });
});
