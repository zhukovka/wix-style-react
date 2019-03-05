import {
  scrollToElement,
} from 'wix-ui-test-utils/protractor';
import { eyesItInstance } from '../../test/utils/eyes-it';
import {buttonTestkitFactory, modalTestkitFactory} from '../../testkit/protractor';
import { storySettings } from '../../stories/Modal/storySettings';
import { createTestStoryUrl } from '../../test/utils/storybook-helpers';
import eventually from 'wix-eventually';


const eyes = eyesItInstance();
const { category, storyName } = storySettings;

fdescribe('Modal', () => {
  const testStoryUrl = testName =>
    createTestStoryUrl({ category, storyName, testName });
  const buttonDriver = buttonTestkitFactory({ dataHook: 'open-modal-button' })

  const createDriver = async (dataHook = storySettings.dataHook) => {
    const driver = modalTestkitFactory({ dataHook });
    await browser.wait(
      driver.exists(),
      5000,
      'Cannot find <Modal/>',
    );
    return driver;
  };

  eyes.it('should render', async () => {
    await createDriver();
  });

  describe('page', () => {
    beforeAll(async () => {
      await browser.get(testStoryUrl('1. Prevent modal background scroll'));
    });

    eyes.it('should be scrollable when Modal is close', async () => {
      const until = protractor.ExpectedConditions;
      const scrollHereDiv = element(by.css('div[data-hook="scroll-here-div"]'));
      browser.wait(until.presenceOf(scrollHereDiv), 5000);
      await scrollToElement(scrollHereDiv);
      expect(await scrollHereDiv.isDisplayed()).toBe(true);
    });

    eyes.it('should not be scrollable when Modal is open', async () => {
      const until = protractor.ExpectedConditions;
      const scrollHereDiv = element(by.css('div[data-hook="scroll-here-div"]'));
      await browser.wait(
        buttonDriver.exists(),
        5000,
        'Cannot find <Button/>',
      );

      browser.wait(until.presenceOf(scrollHereDiv), 5000);
      await buttonDriver.click();
      const modalDriver = await createDriver();

      expect(await modalDriver.isModalDisplayed()).toBe(true);

      // /* cannot find the selector */
      // await eventually(async () => {
      //   const driver = await createDriver();
      //   expect(await driver.element().isDisplayed()).toBe(true);
      // });

      // await scrollToElement(scrollHereDiv);
      // expect(await scrollHereDiv.isDisplayed()).toBe(false);
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
