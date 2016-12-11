import eyes from 'eyes.it';
import {buttonDriverFactory, componentFactory} from './Button.driver';

describe('Button', () => {
  let driver;

  eyes.it('should click a button', () => {
    const component = componentFactory({id: 'main-example'});

    driver = buttonDriverFactory(component);

    browser.get('iframe.html?selectedKind=Components&selectedStory=Button');

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(component), 15000);

    driver.click();
    expect(driver.getButtonText()).toBe('clicked!');
  });
});
