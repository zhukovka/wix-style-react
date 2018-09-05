import eyes from 'eyes.it';

import {waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {pageHeaderTestkitFactory} from '../../testkit/protractor';
import {createTestStoryUrl} from '../../test/utils/storybook-helpers';

import {storySettings} from '../../stories/PageHeader/storySettings';

describe('PageHeader', async () => {
  const testStoryUrl = testName => createTestStoryUrl({...storySettings, testName});

  const dataHook = 'story-page-header';

  const initTest = async testName => {
    await browser.get(testStoryUrl(testName));
    const driver = pageHeaderTestkitFactory({dataHook});
    await waitForVisibilityOf(driver.element(), 'Cannot find PageHeader');
    return driver;
  };

  describe('ellipsis', async () => {
    eyes.it('should disaply an ellipsed title and subtitle', async () => {
      await initTest('1. Ellipsed Title and Subtitle');
    });
  });
});
