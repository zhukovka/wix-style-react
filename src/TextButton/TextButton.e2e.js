import { eyesItInstance } from '../../test/utils/eyes-it';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

import { createStoryUrl } from '../../test/utils/storybook-helpers';
import { storySettings } from '../../stories/TextButton/storySettings';

describe('TextButton', () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.kind,
    story: storySettings.storyName,
  });

  beforeAll(async () => {
    await browser.get(storyUrl);
  });

  afterEach(async () => {
    await autoExampleDriver.remount();
  });

  const eyes = eyesItInstance();

  eyes.it('Make a screenshoft of all TextButton examples', () => {
    expect(true).toBeTruthy();
  });
});
