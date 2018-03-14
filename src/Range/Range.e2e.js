import eyes from 'eyes.it';
import {rangeTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';
import settings from '../../stories/Range/StorySettings';


describe('Range', () => {
  const storyUrl = getStoryUrl(settings.kind, settings.storyName);
  const rangeDriver = rangeTestkitFactory({dataHook: settings.dataHook});

  const waitForRange = () => waitForVisibilityOf(rangeDriver.element(), 'Cannot find Checkbox');

  beforeAll(async () => {
    await browser.get(storyUrl);
  });

  beforeEach(async () => {
    await waitForRange();
  });

  describe('Input type', () => {
    const driver = rangeDriver.inputType;
    eyes.it('should have default props', async () => {
      expect(driver.isFocusedFirst()).toBe(false, 'isFocused');
      expect(driver.isFocusedLast()).toBe(false, 'isFocused');
    });

    eyes.it('should show focused styles for first item', async () => {
      expect(driver.isFocusedFirst()).toBe(false);
      await driver.clickFirst();
      expect(driver.isFocusedFirst()).toBe(true);
    });

    eyes.it('should show focused styles for last item', async () => {
      expect(driver.isFocusedLast()).toBe(false);
      await driver.clickLast();
      expect(driver.isFocusedLast()).toBe(true);
    });
  });
});

