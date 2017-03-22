import eyes from 'eyes.it';
import {buttonTestkitFactory, getStoryUrl, scrollToElement, waitForVisibilityOf} from '../../testkit/protractor';

describe('Button', () => {
  const storyUrl = getStoryUrl('Core', 'Button');
  const dataHook = 'story-button';

  eyes.it('should click a button', () => {
    const driver = buttonTestkitFactory({dataHook});

    browser.get(storyUrl);
    waitForVisibilityOf(driver.element(), 'Cannot find Button')
      .then(() => {
        scrollToElement(driver.element());
        expect(driver.element().isDisplayed()).toBeTruthy();
        expect(driver.getButtonTextContent()).toBe('Click Me!');
        driver.click();
        expect(driver.getButtonTextContent()).toBe('Clicked!');
      });
  });
});
