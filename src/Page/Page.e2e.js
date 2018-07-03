import eyes from 'eyes.it';
import eventually from 'wix-eventually';
import {pageTestkitFactory, getStoryUrl, waitForVisibilityOf, scrollToElement} from '../../testkit/protractor';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import {PRIVATE} from './Page.protractor.driver';

const SCROLL_TOP_THRESHOLD = 20;
const SCROLL_TOP_MIN_STEP = SCROLL_TOP_THRESHOLD + 1;

describe('Page', async () => {
  const storyUrl = getStoryUrl('2. Layout', '2.5 Page');

  const initTest = async ({dataHook, props}) => {
    await browser.get(storyUrl);
    const driver = pageTestkitFactory({dataHook});
    await waitForVisibilityOf(driver.element(), 'Cannot find Button');
    await scrollToElement(driver.element());
    props && await autoExampleDriver.setProps(props);
    return driver;
  };

  const runTestCases = testParams => {
    eyes.it('should display maximized (with Title)', async () => {
      const driver = await initTest(testParams);
      expect(await driver.titleExists()).toBeTruthy();
    });

    eyes.it('should display minimized (without Title)', async () => {
      const driver = await initTest(testParams);
      expect(await driver.titleExists()).toBeTruthy();
      await driver.scrollDown();
      await eventually(() => !driver.titleExists());
    });

    eyes.it('should display minimized with background-image/gradient still visible', async () => {
      const driver = await initTest(testParams);
      expect(await driver.titleExists()).toBeTruthy();
      await driver[PRIVATE].setContentScrollOffset(SCROLL_TOP_MIN_STEP);
      await eventually(() => !driver.titleExists());
    });
  };

  describe('Header + Tail + Content', async () => {
    const dataHook = 'story-page';

    eyes.it('should display maximized when scrolled up given minimized', async () => {
      const driver = await initTest({dataHook});
      expect(await driver.titleExists()).toBeTruthy();
      await driver[PRIVATE].setContentScrollOffset(SCROLL_TOP_MIN_STEP);
      await driver[PRIVATE].setContentScrollOffset(0);
      expect(await driver.titleExists()).toBeTruthy();
    });

    describe('With Background-Image', () => {
      runTestCases({dataHook});
    });

    describe('With gradientCoverTail', () => {
      runTestCases({dataHook, props: {backgroundImageUrl: ''}});
    });

  });

  describe('Header + Content', async () => {

    describe('With Background-Image', () => {
      const dataHook = 'story-page-background-image-header-content';
      runTestCases({dataHook});
    });

    describe('With Gradient', () => {
      const dataHook = 'story-page-gradient-header-content';
      runTestCases({dataHook});
    });
  });

});
