import { protractorUniTestkitFactoryCreator } from 'wix-ui-test-utils/protractor';
import { eyesItInstance } from '../../test/utils/eyes-it';
import {
  buttonTestkitFactory,
} from '../../testkit/protractor';
import { storySettings } from '../../stories/Modal/storySettings';
import { createTestStoryUrl } from '../../test/utils/storybook-helpers';
import { modalPrivateDriverFactory } from "./Modal.private.uni.driver";

const eyes = eyesItInstance();
const { category, storyName } = storySettings;

describe('Modal', () => {
  const modalTestkitFactory = protractorUniTestkitFactoryCreator(modalPrivateDriverFactory);

  const testStoryUrl = testName =>
    createTestStoryUrl({ category, storyName, testName });
  //Runs under execute script by protractor
  //const getButtonBoundingClientRect = () => document.querySelector(`[data-hook='open-modal-button']`).getBoundingClientRect();
  const createDriver = async (dataHook = storySettings.dataHook) => {
    const driver = modalTestkitFactory({ dataHook });
    await browser.wait(driver.exists(), 5000, 'Cannot find <Modal/>');
    return driver;
  };

  const DATA_HOOKS = {
      scrollHereDiv: 'scroll-here-div',
      openModalButton: 'open-modal-button'
  };

  eyes.it('should render', async () => {
    await createDriver();
  });

  describe('test stories', () => {
    beforeAll(async () => {
      await browser.get(testStoryUrl('1. Prevent modal background scroll'));
    });

    eyes.it('should add overflow to body once Modal is open', async ()=>{
      const buttonDriver = buttonTestkitFactory({ dataHook: DATA_HOOKS.openModalButton });
      await browser.wait(buttonDriver.exists(), 5000, 'Cannot find <Button/>');

      await buttonDriver.click();

      const body = element(by.css('body'));
      const bodyOverflow = await body.getCssValue('overflow');

      expect(bodyOverflow).toBe('hidden');
    })


    // TODO: find a way to imitate wheel event since scrolling programmatically overrides overflow hidden

    /*
    eyes.it('should be scrollable when Modal is close', async () => {
      const buttonDriver = buttonTestkitFactory({ dataHook: DATA_HOOKS.openModalButton });
      await browser.wait(buttonDriver.exists(), 5000, 'Cannot find <Button/>');

      const beforeScroll = await browser.executeScript(getButtonBoundingClientRect);

      await browser.executeScript(()=> {
        const evt = new WheelEvent('WheelEvent', { deltaY: 10000 });
        document.body.dispatchEvent(evt);
      });

      const afterScroll = await browser.executeScript(getButtonBoundingClientRect);
      expect(beforeScroll).not.toEqual(afterScroll);
    });

    eyes.it('should not be scrollable when Modal is open', async () => {
      const modalDriver = await createDriver();
      const buttonDriver = buttonTestkitFactory({ dataHook: DATA_HOOKS.openModalButton });

      await browser.wait(buttonDriver.exists(), 5000, 'Cannot find <Button/>');

      const beforeScroll = await browser.executeScript(getButtonBoundingClientRect);
      await buttonDriver.click();
      expect(await modalDriver.isModalDisplayed()).toBe(true);

      await browser.executeScript(()=> {
        const evt = new WheelEvent('WheelEvent', { deltaY: 50 });
        document.body.dispatchEvent(evt);
      });

      const afterScroll = await browser.executeScript(getButtonBoundingClientRect);
      expect(beforeScroll).toEqual(afterScroll);
    });
    */
  });
});