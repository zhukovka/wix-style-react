import eyes from 'eyes.it';
import {stickyPageTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';

describe('StickyPage', () => {
  const storyUrl = getStoryUrl('Core', 'StickyPage');
  const dataHook = 'story-stickyPage';

  eyes.it('should change the class on scroll', () => {
    const driver = stickyPageTestkitFactory({dataHook});

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cannot find StickyPage')
      .then(() => {
        expect(driver.isHeaderMinimized()).toBeFalsy();
        driver.scrollDown();
        expect(driver.isHeaderMinimized()).toBeTruthy();
      });
  });
});
