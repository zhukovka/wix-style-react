import {labelTestkitFactory, getStoryUrl, scrollToElement, waitForVisibilityOf} from '../../testkit/protractor';
import eyes from 'eyes.it';

describe('Label', () => {
  const storyUrl = getStoryUrl('Core', 'Label');
  const dataHook = 'story-label';

  eyes.it('should show the label correctly', () => {
    const driver = labelTestkitFactory({dataHook});

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cant find Label')
      .then(() => {
        scrollToElement(driver.element());

        expect(driver.getLabelText()).toBe('Label text');
      });
  });

  eyes.it('should focus on the input when clicked', () => {
    const driver = labelTestkitFactory({dataHook});

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cant find Label')
      .then(() => {
        scrollToElement(driver.element());

        driver.click();
        expect(browser.driver.switchTo().activeElement().getAttribute('id'))
          .toEqual(driver.getAssociatedInput()
            .then(input => input.getAttribute('id')));
      });
  });
});
