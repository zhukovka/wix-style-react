import eyes from 'eyes.it';
import {breadcrumbsTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';

xdescribe('Breadcrumbs', () => {
  const storyUrl = getStoryUrl('Core', 'Breadcrumbs');

  eyes.it('should display breadcrumbs', () => {
    const driver = breadcrumbsTestkitFactory({dataHook: 'story-breadcrumbs-row'});

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cannot find Breadcrumbs')
    .then(() => {
      expect(driver.element().isDisplayed()).toBeTruthy();
    });
  });
});
