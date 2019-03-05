import { createTestStoryUrl } from '../../test/utils/storybook-helpers';

import { eyesItInstance } from '../../test/utils/eyes-it';
import {
  storySettings,
  testStories,
} from '../../stories/components/DateInput/storySettings';

describe('DateInput', () => {
  const eyes = eyesItInstance();

  eyes.it('should render DateInput with variations', async () => {
    const testStoryUrl = testName =>
      createTestStoryUrl({ ...storySettings, testName });

    const checkTestStory = async testName => {
      await browser.get(testStoryUrl(testName));
      await eyes.checkWindow(testName);
    };
    await checkTestStory(testStories.dateInputVariations);
  });
});
