import {
  eyesItInstance,
  DEFAULT_WINDOW_HEIGHT,
} from '../../test/utils/eyes-it';
import eventually from 'wix-eventually';

import { pageTestkitFactory } from '../../testkit/protractor';
import {
  waitForVisibilityOf,
  scrollToElement,
} from 'wix-ui-test-utils/protractor';
import {
  createStoryUrl,
  createTestStoryUrl,
} from '../../test/utils/storybook-helpers';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import { storySettings } from '../../stories/Page/storySettings';

const { category, storyName } = storySettings;

const testStoryUrl = testName =>
  createTestStoryUrl({ category, storyName, testName });

describe('Page', () => {
  const initTest = async ({ storyUrl, dataHook, props }) => {
    await browser.get(storyUrl);
    const driver = pageTestkitFactory({ dataHook });
    await waitForVisibilityOf(driver.element(), 'Cannot find Page');
    await scrollToElement(driver.element());
    props && (await autoExampleDriver.setProps(props));
    return driver;
  };

  const runTestCases = initTestConfig => {
    const eyes = eyesItInstance({
      enableSnapshotAtBrowserGet: false,
      enableSnapshotAtEnd: false,
    });

    eyes.it('should hide title on scroll threshold', async () => {
      const driver = await initTest(initTestConfig);

      await expect(await driver.titleExists()).toBeTruthy();
      await eyes.checkWindow('Page title shown');

      await driver.scrollDown();
      await eventually(() => !driver.titleExists());
      await eyes.checkWindow('Page title hidden');

      await driver.scrollUp();
      await eventually(() => driver.titleExists());
      await eyes.checkWindow('Page title appears');
    });
  };

  describe('Header + Tail + Content', () => {
    const dataHook = 'story-page';

    const storyUrl = createStoryUrl({
      kind: category,
      story: storyName,
      withExamples: false,
    });
    describe('With Background-Image', () => {
      runTestCases({ storyUrl, dataHook });
    });

    describe('With gradientCoverTail', () => {
      runTestCases({ storyUrl, dataHook, props: { backgroundImageUrl: '' } });
    });
  });

  describe('Header + Content', () => {
    const dataHook = 'story-page';

    describe('With Background-Image', () => {
      const storyUrl = testStoryUrl('1. Image');
      runTestCases({ storyUrl, dataHook });
    });

    describe('With Gradient', () => {
      const storyUrl = testStoryUrl('2. Gradient');
      runTestCases({ storyUrl, dataHook });
    });
  });

  describe('Header + FixedContent + Content', () => {
    const dataHook = 'story-page';

    describe('With Background-Image', () => {
      const storyUrl = testStoryUrl('3. FC-Image');
      runTestCases({ storyUrl, dataHook });
    });

    describe('With Gradient', () => {
      const storyUrl = testStoryUrl('4. FC-Gradient');
      runTestCases({ storyUrl, dataHook });
    });
  });

  describe('With EmptyState', () => {
    const storyUrl = createStoryUrl({ kind: category, story: storyName });
    const eyes = eyesItInstance();
    eyes.it('should not break design', async () => {
      const _dataHook = 'story-page-empty-state';
      const element = $(`[data-hook="${_dataHook}"]`);

      await browser.get(storyUrl);
      await waitForVisibilityOf(element, `Cannot find ${_dataHook}`);
      await scrollToElement(element);
    });
  });

  describe('min/max width', () => {
    const eyes = eyesItInstance();
    eyes.it(
      'should stop growing at max-width',
      async () => {
        const storyUrl = testStoryUrl('5. max-width exceeded');
        await browser.get(storyUrl);
      },
      {
        enableSnapshotAtBrowserGet: true,
        enableSnapshotAtEnd: false,
        width: 1500,
        height: DEFAULT_WINDOW_HEIGHT,
      },
    );

    eyes.it(
      'should stop shrinking at min-width',
      async () => {
        const storyUrl = testStoryUrl('6. min-width exceeded');
        await browser.get(storyUrl);
      },
      {
        enableSnapshotAtBrowserGet: true,
        enableSnapshotAtEnd: false,
      },
    );
  });
});
