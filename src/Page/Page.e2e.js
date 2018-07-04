import eyes from 'eyes.it';
import eventually from 'wix-eventually';
import {pageTestkitFactory, getStoryUrl, waitForVisibilityOf, scrollToElement} from '../../testkit/protractor';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import {PRIVATE} from './Page.protractor.driver';
import {TESTS_PREFIX} from '../../stories/storyCategories';
import {storybookConfig} from '../../stories/Page/storybookConfig';

const {category, storyName} = storybookConfig;

const SCROLL_TOP_THRESHOLD = 20;
const SCROLL_TOP_MIN_STEP = SCROLL_TOP_THRESHOLD + 1;

describe('Page', async () => {

  const initTest = async ({storyUrl, dataHook, props}) => {
    await browser.get(storyUrl);
    const driver = pageTestkitFactory({dataHook});
    await waitForVisibilityOf(driver.element(), 'Cannot find Button');
    await scrollToElement(driver.element());
    props && await autoExampleDriver.setProps(props);
    return driver;
  };

  const runTestCases = initTestConfig => {
    eyes.it('should display maximized (with Title)', async () => {
      const driver = await initTest(initTestConfig);
      expect(await driver.titleExists()).toBeTruthy();
    });

    eyes.it('should display minimized (without Title)', async () => {
      const driver = await initTest(initTestConfig);
      expect(await driver.titleExists()).toBeTruthy();
      await driver.scrollDown();
      await eventually(() => !driver.titleExists());
    });

    eyes.it('should display minimized with background-image/gradient still visible', async () => {
      const driver = await initTest(initTestConfig);
      expect(await driver.titleExists()).toBeTruthy();
      await driver[PRIVATE].setContentScrollOffset(SCROLL_TOP_MIN_STEP);
      await eventually(() => !driver.titleExists());
    });
  };

  describe('Header + Tail + Content', async () => {
    const storyUrl = getStoryUrl(category, storyName);
    const dataHook = 'story-page';

    eyes.it('should display maximized when scrolled up given minimized', async () => {
      const driver = await initTest({storyUrl, dataHook});
      expect(await driver.titleExists()).toBeTruthy();
      await driver[PRIVATE].setContentScrollOffset(SCROLL_TOP_MIN_STEP);
      await driver[PRIVATE].setContentScrollOffset(0);
      expect(await driver.titleExists()).toBeTruthy();
    });

    describe('With Background-Image', () => {
      runTestCases({storyUrl, dataHook});
    });

    describe('With gradientCoverTail', () => {
      runTestCases({storyUrl, dataHook, props: {backgroundImageUrl: ''}});
    });
  });

  describe('Header + Content', async () => {
    describe('With Background-Image', () => {
      const storyUrl = getStoryUrl(`${TESTS_PREFIX}/${category}/${storyName}`, '1. Image');
      const dataHook = 'story-page-background-image-header-content';
      runTestCases({storyUrl, dataHook});
    });

    describe('With Gradient', () => {
      const storyUrl = getStoryUrl(`${TESTS_PREFIX}/${category}/${storyName}`, '2. Gradient');
      const dataHook = 'story-page-gradient-header-content';
      runTestCases({storyUrl, dataHook});
    });
  });
});
