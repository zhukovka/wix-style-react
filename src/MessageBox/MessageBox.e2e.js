import eyes from 'eyes.it';
import {createStoryUrl, waitForVisibilityOf, scrollToElement} from '../../test/utils/protractor';

const byDataHook = dataHook => $(`[data-hook="${dataHook}"]`);

describe('MessageBox', () => {
  const storyUrl = createStoryUrl({kind: '9. Modals', story: 'MessageBox'});

  eyes.it('should not break design', async () => {
    const dataHook = 'message-box-title';
    const element = byDataHook(dataHook);

    await browser.get(storyUrl);
    await waitForVisibilityOf(element, `Cannot find ${dataHook}`);
    await scrollToElement(element);
  });
});
