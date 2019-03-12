import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';

import { eyesItInstance } from '../../../test/utils/eyes-it';
import { storySettings, testStories } from './storySettings';
import { protractorUniTestkitFactoryCreator } from 'wix-ui-test-utils/protractor';
import { dateRangeInputPrivateDriverFactory } from '../DateRangeInput.private.uni.driver';

describe('DateRangeInput', () => {
  const eyes = eyesItInstance();
  const dateRangeInputTestKitFactory = protractorUniTestkitFactoryCreator(
    dateRangeInputPrivateDriverFactory,
  );

  const getElementZIndex = elem => {
    return browser.executeScript(
      elem => Number(getComputedStyle(elem).zIndex),
      elem.getWebElement(),
    );
  };

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
    // Click to give the correct input focus
    await driver.clickOnDateFromInput();
    const fromInputDriver = driver.getInputDriver('from');
    const fromZIndex = await getElementZIndex(await fromInputDriver.element());
    const toInputDriver = driver.getInputDriver('to');
    const toZIndex = await getElementZIndex(await toInputDriver.element());
    expect(fromZIndex > toZIndex).toBe(true);
  });

  eyes.it('should show focused `to` input above `from` input', async () => {
    await browser.get(testStoryUrl(testStories.dateRangeInputVariations));
    const driver = await createDriver();
    // Click to give the correct input focus;
    await driver.clickOnDateToInput();
    const fromInputDriver = driver.getInputDriver('from');
    const fromZIndex = await getElementZIndex(await fromInputDriver.element());
    const toInputDriver = driver.getInputDriver('to');
    const toZIndex = await getElementZIndex(await toInputDriver.element());
    expect(fromZIndex < toZIndex).toBe(true);
  });
});
