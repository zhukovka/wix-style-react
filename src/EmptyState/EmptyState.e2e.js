import eyes from 'eyes.it';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

import { emptyStateTestkitFactory } from '../../testkit/protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
  scrollToElement,
} from 'wix-ui-test-utils/protractor';
import { storySettings } from '../../stories/EmptyState/storySettings';

fdescribe('EmptyState', () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.kind,
    story: storySettings.storyName,
    withExamples: false,
  });

  const createDriverFactory = async (dataHook = 'storybook-empty-state') => {
    const driver = emptyStateTestkitFactory({ dataHook });

    await waitForVisibilityOf(
      driver.element(),
      'Cannot find EmptyState component',
    );
    await scrollToElement(driver.element());
    return driver;
  };

  beforeAll(async () => {
    await browser.get(storyUrl);
  });

  beforeEach(async () => {
    await autoExampleDriver.reset();
  });

  eyes.fit(`should render for 'page' theme`, async () => {
    await autoExampleDriver.setProps({ theme: 'page' });
    await createDriverFactory();
  });

});
