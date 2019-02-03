import { eyesItInstance } from '../../test/utils/eyes-it';
import { inputTestkitFactory } from '../../testkit/protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { createStoryUrl } from '../../test/utils/storybook-helpers';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

describe('Input', () => {
  const eyes = eyesItInstance();

  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'Input',
    withExamples: false,
  });

  const driver = inputTestkitFactory({ dataHook: 'storybook-input' });

  beforeAll(() => browser.get(storyUrl));

  afterEach(() => autoExampleDriver.remount());

  eyes.it('should render input component', async () => {
    await waitForVisibilityOf(driver.element(), 'Cannot find Input component');
  });

  eyes.it('should render with correct text', async () => {
    await autoExampleDriver.setProps({ value: 'hello' });
    await waitForVisibilityOf(driver.element(), 'Cannot find Input component');
    expect(await driver.getText()).toEqual('hello');
  });
});
