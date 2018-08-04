import eyes from 'eyes.it';
import {imageViewerTestkitFactory} from '../../testkit/protractor';
import {waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {getStoryUrl} from '../../test/utils/storybook-helpers';

describe('ImageViewer', () => {
  const storyUrl = getStoryUrl('3. Inputs', '3.10 ImageViewer');

  eyes.it('should click ImageViewer', () => {
    const driver = imageViewerTestkitFactory({dataHook: 'empty-image-viewer'});

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cannot find ImageViewer')
      .then(() => {
        driver.click();
      });
  });
});
