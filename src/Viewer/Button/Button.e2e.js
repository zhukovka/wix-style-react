import eyes from 'eyes.it';
import {viewerButtonTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../../testkit/protractor';

describe('Viewer Button', () => {
  const storyUrl = getStoryUrl('Viewer', 'Button');
  const beforeClickState = 'Click Me!';
  const clickedState = 'Clicked!';

  eyes.it('should click a button', () => {
    const dataHook = 'story-button-enabled';
    const driver = viewerButtonTestkitFactory({dataHook});

    browser.get(storyUrl);

    waitForVisibilityOf(driver.element(), 'Cannot find Button')
      .then(() => {
        expect(driver.getButtonTextContent()).toBe(beforeClickState);
        driver.click();
        expect(driver.getButtonTextContent()).toBe(clickedState);
      });
  });

  eyes.it('should render disabled buttons correctly', () => {
    const dataHookDisabled = 'story-button-disabled';
    const driverDisabled = viewerButtonTestkitFactory({dataHook: dataHookDisabled});

    // browser.get(storyUrl);
    waitForVisibilityOf([driverDisabled.element()], 'Cannot find Button')
      .then(() => {
        expect(driverDisabled.isButtonDisabled()).toBe(true);
      });
  });
});
