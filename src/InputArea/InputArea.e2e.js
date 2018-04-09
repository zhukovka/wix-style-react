import eyes from 'eyes.it';
import {inputAreaTestkitFactory} from '../../testkit/protractor';
import {createStoryUrl, waitForVisibilityOf} from '../../test/utils/protractor';

describe('input area page', () => {
  // const storyUrl = getStoryUrl('3. Inputs', '3.2 + InputArea');
  const storyUrl = createStoryUrl({kind: '3. Inputs', story: '3.2 + InputArea', withExamples: false});
  const inputAreaTestkit = inputAreaTestkitFactory({dataHook: 'storybook-inputarea'});

  beforeEach(async () => {
    await browser.get(storyUrl);
    await waitForVisibilityOf(inputAreaTestkit.element());
  });

  eyes.it('should render default props', () => {
    expect(inputAreaTestkit.isFocused()).toBe(false, 'isFocused');
  });

  eyes.it('should show focus styles', async () => {
    expect(inputAreaTestkit.isFocused()).toBe(false);
    await browser.actions().sendKeys(protractor.Key.TAB).perform();
    expect(inputAreaTestkit.isFocused()).toBe(true);
  });

});
