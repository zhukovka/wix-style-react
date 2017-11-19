import eyes from 'eyes.it';
import {stickyPageTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';

describe('StickyPage', () => {
  const storyUrl = getStoryUrl('Core', 'StickyPage');
  const dataHook = 'story-stickyPage';

  eyes.it('should change the class on scroll', async () => {
    const driver = stickyPageTestkitFactory({dataHook});

    browser.get(storyUrl);

    await waitForVisibilityOf(driver.element(), 'Cannot find StickyPage')
      .then(async () => {
        await expect(driver.isHeaderMinimized()).toBeFalsy();
        await driver.scrollDown();
        await expect(driver.isHeaderMinimized()).toBeTruthy();
      });
  });
});
