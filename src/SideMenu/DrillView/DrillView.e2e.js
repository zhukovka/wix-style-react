import {drillViewTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../../testkit/protractor';
import eyes from 'eyes.it';

describe('DrillView', () => {
  const storyUrl = getStoryUrl('6. Navigation', '6.1 SideMenuDrill');

  eyes.it('should clear transition classes', async () => {
    const dataHook = 'side-menu';
    const driver = drillViewTestkitFactory({dataHook});

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cannot find DrillView');
    driver.clickSubMenu(1);

    waitForVisibilityOf(driver.getBackLink(), 'Cannot find BackLink');
    driver.clickBackLink();

    await browser.wait(() => driver.hasSingleDrillViewPanel());
    expect(await driver.hasNoTransitionClassesInDrillView()).toBe(true);
  });
});
