import {
  waitForVisibilityOf,
  scrollToElement,
} from 'wix-ui-test-utils/protractor';
import { eyesItInstance } from '../../test/utils/eyes-it';
import { generatedTestComponentTestkitFactory } from '../../testkit/protractor';
import { storySettings } from '../../stories/Modal/storySettings';
import { createTestStoryUrl } from '../../test/utils/storybook-helpers';

const eyes = eyesItInstance();
const { category, storyName } = storySettings;

describe('Modal Test Component', () => {
  const testStoryUrl = testName =>
    createTestStoryUrl({ category, storyName, testName });

  const createDriver = async (dataHook = storySettings.dataHook) => {
    const driver = generatedTestComponentTestkitFactory({ dataHook });

    await waitForVisibilityOf(
      await driver.element(),
      `Cannot find <GeneratedTestComponent/> component with dataHook of ${dataHook}`,
    );

    await scrollToElement(await driver.element());

    return driver;
  };

  eyes.it('should render', async () => {
    await createDriver();
  });

  describe('prevent page scrolling when modal is open', async () => {
    beforeAll(async () => {
      await browser.get(testStoryUrl('1. Prevent modal background scroll'));
    });

    eyes.it('should scroll page when Modal is not open', async () => {
      const scrollHereDiv = element(by.css('div[data-hook="scroll-here-div"]'));
      await scrollToElement(scrollHereDiv);
      expect(await scrollHereDiv.isDisplayed()).toBe(true);
    });

    eyes.it('should not scroll page when Modal is open', async () => {
      const scrollHereDiv = element(by.css('div[data-hook="scroll-here-div"]'));
      const openModalButton = element(
        by.css('div[data-hook="open-modal-button"]'),
      );

      await openModalButton.click();
      await scrollToElement(scrollHereDiv);

      expect(await scrollHereDiv.isDisplayed()).toBe(false);
    });
  });
});

//TODOs: /* protractor API */
/* https://www.protractortest.org/#/api
1. scroll body (window.scroll)
2. verify scrolled (checking position -?!)

---------------------------
3. open modal
4. scroll body (window.scroll??)
5. verify not scrolled (checking position -?!) f
* */
//
