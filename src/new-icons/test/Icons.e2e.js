import eyes from 'eyes.it';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { createStoryUrl } from '../../../test/utils/storybook-helpers';

describe('Icons', () => {
  const storyUrl = createStoryUrl({
    kind: '1. Foundation',
    story: '1.4 Icons',
  });
  eyes.it('should show all icons', async () => {
    browser.get(storyUrl);
    await waitForVisibilityOf(
      $('[data-hook="new-icons"]'),
      'Cannot find all icons',
    );
  });
});
