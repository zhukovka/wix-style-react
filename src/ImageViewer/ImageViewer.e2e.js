import eyes from 'eyes.it';
import {imageViewerTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';

describe('ImageViewer', () => {
  const storyUrl = getStoryUrl('Core', 'ImageViewer');

  eyes.it('should click ImageViewer', () => {
    const driver = imageViewerTestkitFactory({dataHook: 'empty-image-viewer'});

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cannot find ImageViewer')
      .then(() => {
        driver.click();
      });
  });
});
