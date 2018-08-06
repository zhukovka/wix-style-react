import eyes from 'eyes.it';
import {waitForVisibilityOf, scrollToElement} from 'wix-ui-test-utils/protractor';
import {createStoryUrl} from '../../test/utils/storybook-helpers';

describe('Card and Grid', () => {
  const byDataHook = dataHook => $(`[data-hook="${dataHook}"]`);

  eyes.it('should not break design', async () => {
    const dataHook = 'card-example-basic';
    const element = byDataHook(dataHook);
    const url = createStoryUrl({kind: '2. Layout', story: 'Card'});

    await browser.get(url);
    await waitForVisibilityOf(element, `Cannot find ${dataHook}`);
    await scrollToElement(element);
  });
});
