import { eyesItInstance } from '../../test/utils/eyes-it';

import { createTestStoryUrl } from '../../test/utils/storybook-helpers';
import { storySettings, testStories } from './docs/storySettings';

describe('CloseButton', () => {
  const testStoryUrl = testName =>
    createTestStoryUrl({ ...storySettings, testName });

  const eyes = eyesItInstance();

  describe('test stories', () => {
    const checkTestStory = async testName => {
      await browser.get(testStoryUrl(testName));
      eyes.checkWindow(testName);
    };

    eyes.it('check closebutton skins', async () => {
      await checkTestStory(testStories.CLOSEBUTTON_SKINS);
    });

    eyes.it('check closebutton sizes', async () => {
      await checkTestStory(testStories.CLOSEBUTTON_AS);
    });
  });
});
