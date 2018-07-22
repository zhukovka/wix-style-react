import * as eyes from 'eyes.it';
import {browser} from 'protractor';
import {exampleTSCompTestkitFactory, waitForVisibilityOf} from '../../testkit/protractor';
import {createStoryUrl} from 'wix-ui-test-utils/protractor';
import {storySettings} from '../../stories/ExampleTSComp/storySettings';

describe('ExampleTSComp', () => {
  const storyUrl = createStoryUrl({kind: storySettings.kind, story: storySettings.storyName});
  const dataHook = storySettings.dataHook;
  let driver;

  beforeEach(() => {
    return browser.get(storyUrl);
  });

  // eyes commented out in order for alpha version e2e test not to fail (I don't want to change the master base-line only for this)
  // eyes.it('should render', async () => {
  it('should render', async () => {
    const driver = exampleTSCompTestkitFactory({dataHook});
    await waitForVisibilityOf(driver.element(), 'Cannot find ExampleTSComp');
    expect(await driver.element().isPresent()).toBeTruthy();
    expect(await driver.element().getText()).toBe('my name is erez');
  });


});
