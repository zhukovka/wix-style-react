import eyes from 'eyes.it';
import {checkboxTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';
import autoExampleTestkitFactory from '../../stories/utils/Components/AutoExample/protractor.driver';

describe('Checkbox', () => {
  const storyUrl = getStoryUrl('4. Selection', '4.2 Checkbox');
  const autoExampleDriver = autoExampleTestkitFactory({dataHook: 'auto-example'});
  const checkboxDriver = checkboxTestkitFactory({dataHook: 'storybook-checkbox'});

  beforeEach(() => {
    browser.get(storyUrl);
  });

  eyes.it('should toggle state when clicked', () => {
    waitForVisibilityOf(checkboxDriver.element(), 'Cannot find Checkbox')
      .then(() => {
        autoExampleDriver.get.toggle('storybook-Checkbox-checked-toggle').click();
        expect(checkboxDriver.isChecked()).toBe(true);

        autoExampleDriver.get.toggle('storybook-Checkbox-checked-toggle').click();
        expect(checkboxDriver.isChecked()).toBe(false);
      });
  });
});
