import eyes from 'eyes.it';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

import {pageTestkitFactory} from '../../testkit/protractor';
import {waitForVisibilityOf, scrollToElement} from 'wix-ui-test-utils/protractor';
import {createStoryUrl} from '../../test/utils/storybook-helpers';
import {storySettings} from '../../stories/Pagination/storySettings';

describe('Pagination', () => {
  const storyUrl = createStoryUrl({kind: storySettings.kind, story: storySettings.story});
  const dataHook = storySettings.dataHook;

  const initTest = async props => {
    await browser.get(storyUrl);
    const driver = pageTestkitFactory({dataHook});
    await waitForVisibilityOf(driver.element(), 'Cannot find Page');
    await scrollToElement(driver.element());
    props && (await autoExampleDriver.setProps(props));
    return driver;
  };

  eyes.it('should render with default props', async () => {
    const driver = await initTest();
    expect(await driver.element().isPresent()).toBeTruthy();
  });
});
