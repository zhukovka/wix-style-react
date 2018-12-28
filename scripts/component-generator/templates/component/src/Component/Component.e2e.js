import {
  createStoryUrl,
  waitForVisibilityOf,
  scrollToElement,
} from 'wix-ui-test-utils/protractor';

import { eyesItInstance } from '../../test/utils/eyes-it';
import { {%componentName%}TestkitFactory } from '../../testkit/protractor';
import { storySettings } from '../../stories/{%ComponentName%}/storySettings';

const eyes = eyesItInstance();

describe('{%ComponentName%}', () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.category,
    story: storySettings.storyName,
  });

  const createDriver = async (dataHook = storySettings.dataHook) => {
    const driver = {%componentName%}TestkitFactory({ dataHook });

    await waitForVisibilityOf(
      await driver.element(),
      `Cannot find <{%ComponentName%}/> component with dataHook of ${dataHook}`,
    );

    await scrollToElement(await driver.element());

    return driver;
  };

  beforeAll(async () => {
    await browser.get(storyUrl);
  });

  eyes.it('should render', async () => {
    await createDriver();
  });

  eyes.it('should render live example', async () => {
    await createDriver('story-{%component-name%}-live-example');
  });
});
