import eyes from 'eyes.it';
import { tabsTestkitFactory } from '../../testkit/protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { createStoryUrl } from '../../test/utils/storybook-helpers';

import { storySettings } from './docs/storySettings';

describe('Tabs', () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.category,
    story: storySettings.storyName,
  });
  const dataHook = 'story-tabs';

  eyes.it('renders enough tab items', () => {
    const tabsDriver = tabsTestkitFactory({ dataHook });

    browser.get(storyUrl);

    return waitForVisibilityOf(tabsDriver.element()).then(() => {
      expect(tabsDriver.getItemsCount()).toBe(7);
    });
  });
});
