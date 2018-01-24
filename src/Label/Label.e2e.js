import {labelTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';
import eyes from 'eyes.it';

describe('Label', () => {
  const storyUrl = getStoryUrl('1. Foundation', '1.2 + Label');
  const dataHook = 'story-label';

  eyes.it('should show text and focus on the input when clicked', () => {
    const driver = labelTestkitFactory({dataHook});

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cant find Label')
      .then(() => {
        expect(driver.getLabelText()).toBe('Label text');

        driver.click();

        expect(browser.driver.switchTo().activeElement().getAttribute('id'))
          .toEqual(driver.getAssociatedInput()
            .then(input => input.getAttribute('id')));
      });
  });
});
