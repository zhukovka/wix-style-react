import { createTestStoryUrl } from '../../test/utils/storybook-helpers';

import { eyesItInstance } from '../../test/utils/eyes-it';
import { storySettings, testStories } from './docs/storySettings';
import { protractorUniTestkitFactoryCreator } from 'wix-ui-test-utils/protractor';
import { dateRangeInputPrivateDriverFactory } from './DateRangeInput.private.uni.driver';

describe('DateRangeInput', () => {
  const eyes = eyesItInstance();
  const dateRangeInputTestKitFactory = protractorUniTestkitFactoryCreator(
    dateRangeInputPrivateDriverFactory,
  );

  const createDriver = async (dataHook = storySettings.dataHook) => {
    const driver = dateRangeInputTestKitFactory({ dataHook });
    await browser.wait(driver.exists(), 5000, 'Cannot find <DateRangeInput/>');
    return driver;
  };

  const testStoryUrl = testName =>
    createTestStoryUrl({ ...storySettings, testName });
  eyes.it('should render DateRangeInput with variations', async () => {
    await browser.get(testStoryUrl(testStories.dateRangeInputVariations));
    await eyes.checkWindow(testStories.dateRangeInputVariations);
  });

  eyes.it('should show focused `from` input above `to` input', async () => {
    await browser.get(testStoryUrl(testStories.dateRangeInputVariations));
    const driver = await createDriver();
    await driver.clickOnDateFromInput();
    expect(driver).toBeTruthy();
  });
});
