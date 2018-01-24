import eyes from 'eyes.it';
import {pageTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';

describe('Page', () => {
  const storyUrl = getStoryUrl('2. Layout', '2.5 Page');
  const dataHook = 'story-page';

  eyes.it('should display the title and after scroll should hide it ', async () => {
    const driver = pageTestkitFactory({dataHook});

    browser.get(storyUrl);

    await waitForVisibilityOf(driver.element(), 'Cannot find Page')
      .then(async () => {
        await expect(driver.titleExists()).toBeTruthy();
        await driver.scrollDown();
        await browser.wait(protractor.ExpectedConditions.invisibilityOf(driver.titleElement()));
        await expect(driver.titleExists()).toBeFalsy();
      });
  });
});
