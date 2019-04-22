import { modalSelectorLayoutTestkitFactory } from '../../testkit/protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { createStoryUrl } from '../../test/utils/storybook-helpers';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

import { storySettings } from './docs/storySettings';

describe('ModalSelectorLayout', () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.category,
    story: storySettings.storyName,
  });
  const modalSelectorLayoutDriver = modalSelectorLayoutTestkitFactory({
    dataHook: 'storybook-modal-selector-layout',
  });

  beforeAll(() => {
    browser.get(storyUrl);
  });

  afterEach(() => {
    autoExampleDriver.reset();
  });

  it('should render defaults', () => {
    autoExampleDriver.setProps({
      size: 'large',
      color: 'white',
      text: 'Wubba Lubba Dub Dub',
    });

    waitForVisibilityOf(
      modalSelectorLayoutDriver.element(),
      'Cannot find <ModalSelectorLayout/>',
    ).then(() => {
      expect(modalSelectorLayoutDriver.element().isDisplayed()).toBe(true);
      expect(modalSelectorLayoutDriver.getTitle()).toBe('Choose Your Items');
    });
  });
});
