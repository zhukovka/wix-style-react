import eyes from 'eyes.it';
import {protractorButtonTestkitFactory} from './testkit/Button.protractor';

describe('Button', () => {
  eyes.it('should click a button', () => {

    const driver = protractorButtonTestkitFactory({id: 'fullblue'});

    browser.get('iframe.html?selectedKind=3.%20Buttons&selectedStory=3.1%20Standard');

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(driver.element()), 15000);

    driver.click();
    expect(driver.getButtonText()).toBe('clicked!');
  });
});
