import eyes from 'eyes.it';
import {
  buttonTestkitFactory,
  messageBoxFunctionalLayoutTestkitFactory,
} from '../../testkit/protractor';
import {
  waitForVisibilityOf,
  scrollToElement,
} from 'wix-ui-test-utils/protractor';
import { createStoryUrl } from '../../test/utils/storybook-helpers';
import { storySettings } from './docs/storySettings';

const byDataHook = dataHook => $(`[data-hook="${dataHook}"]`);

async function verifyItem(dataHook) {
  const element = byDataHook(dataHook);
  await waitForVisibilityOf(element, `Cannot find ${dataHook}`);
  await scrollToElement(element);
  await eyes.checkWindow(dataHook);
}

describe('MessageBox', () => {
  describe('Alert', () => {
    const scrollable = 'alert-scrollable';

    eyes.it(
      'should show footer border for scrollable modal and hide the border when scroll is on the bottom',
      async () => {
        await browser.get(createStoryUrl({ ...storySettings.alert }));
        await verifyItem(scrollable);

        const driver = messageBoxFunctionalLayoutTestkitFactory({
          dataHook: scrollable,
        });
        const SMALL_SCROLL_OFFSET = 50;
        const MAX_SCROLL_OFFSET = 500;

        expect(await driver.toHaveFooterBorder()).toBe(true);

        await driver.scrollBodyDown(SMALL_SCROLL_OFFSET);
        expect(await driver.toHaveFooterBorder()).toBe(true);

        await driver.scrollBodyDown(MAX_SCROLL_OFFSET);
        expect(await driver.toHaveFooterBorder()).toBe(false);
      },
    );
  });

  describe('Custom Modal', () => {
    eyes.it('should open full screen modal', async () => {
      await browser.get(createStoryUrl({ ...storySettings.custom }));
      const button = buttonTestkitFactory({
        dataHook: 'open-full-screen-modal-button',
      });
      button.click();
      await verifyItem('fullscreen-modal');
    });
  });
});
