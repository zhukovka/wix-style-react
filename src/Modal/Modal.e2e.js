import { eyesItInstance } from '../../test/utils/eyes-it';
import { storySettings, testStories } from './test/storySettings';
import { createTestStoryUrl } from '../../test/utils/storybook-helpers';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';

const eyes = eyesItInstance();
const { category, storyName } = storySettings;

describe('Modal', () => {
  const testStoryUrl = testName =>
    createTestStoryUrl({ category, storyName, testName });

  describe('test stories', () => {
    beforeAll(async () => {
      await browser.get(testStoryUrl(testStories.modalBackgroundScroll));
    });

    eyes.it('should add overflow to body once Modal is open', async () => {
      await waitForVisibilityOf(
        element(by.css(`[data-hook="${storySettings.dataHook}"]`)),
        'Cannot find Modal component',
      );
      const body = element(by.css('body'));
      const bodyOverflow = await body.getCssValue('overflow');

      expect(bodyOverflow).toBe('hidden');
    });
  });
});
