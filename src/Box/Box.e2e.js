import { scrollToElement, waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

import { eyesItInstance } from '../../test/utils/eyes-it';
import { createStoryUrl } from '../../test/utils/storybook-helpers';
import { storySettings } from '../../stories/Box/storySettings';
import { boxTestkitFactory } from '../../testkit/protractor';

const eyes = eyesItInstance();

describe('Box', () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.category,
    story: storySettings.storyName,
    withExamples: true,
  });

  const createDriver = async (dataHook = storySettings.dataHook) => {
    const driver = boxTestkitFactory({ dataHook });

    await waitForVisibilityOf(
      await driver.element(),
      `Cannot find <Box/> component with dataHook of ${dataHook}`,
    );

    await scrollToElement(await driver.element());

    return driver;
  };

  beforeAll(async () => await browser.get(storyUrl));

  describe('AutoExample', () => {
    afterEach(async () => await autoExampleDriver.remount());

    eyes.it('should be rendered', async () => {
      await createDriver();
    });

    eyes.it('should be rendered as an inline element', async () => {
      await autoExampleDriver.setProps({ inline: true });
      await createDriver();
    });

    describe('Alignment', () => {
      eyes.it('should be aligned horizontally to right', async () => {
        await autoExampleDriver.setProps({ align: 'right' });
        await createDriver();
      });

      eyes.it('should be aligned vertically to bottom', async () => {
        await autoExampleDriver.setProps({ verticalAlign: 'bottom' });
        await createDriver();
      });
    });

    describe('Spacing', () => {
      eyes.it(
        'should be rendered with margin',
        async () => {
          await autoExampleDriver.setProps({ margin: 2 });
          await createDriver();
        },
      );

      eyes.it(
        'should be rendered with padding',
        async () => {
          await autoExampleDriver.setProps({ padding: '3px 4px' });
          await createDriver();
        },
      );
    });

    describe('Sizing', () => {
      eyes.it('should be rendered with minHeight', async () => {
        await autoExampleDriver.setProps({ minHeight: '50px' });
        await createDriver();
      });

      eyes.it('should be rendered with maxWidth', async () => {
        await autoExampleDriver.setProps({ maxWidth: '100px' });
        await createDriver();
      });
    });

    describe('Styling', () => {
      eyes.it('should be rendered with color', async () => {
        await autoExampleDriver.setProps({ color: 'G00' });
        await createDriver();
      });

      eyes.it('should be rendered with backgroundColor', async () => {
        await autoExampleDriver.setProps({ backgroundColor: '#3899ec' });
        await createDriver();
      });
    });
  });

  describe('Examples', () => {
    eyes.it(
      'should render a box that contains multiple boxes',
      async () => {
        await createDriver('storybook-multiple-boxes-within-box');
      },
    );
  });
});
