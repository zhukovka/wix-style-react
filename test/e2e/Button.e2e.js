import eyes from 'eyes.it';
import ButtonDriver from '../../testkit/Button';

describe('Button', () => {
  let driver;
  eyes.it('should click a button', () => {
    driver = new ButtonDriver({id: 'main-example', find: selector => $(selector)});

    browser.get('iframe.html?selectedKind=Components&selectedStory=Button');

    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(driver.element), 15000);

    driver.click();
    expect(driver.element.getText()).toBe('clicked!');
  }, 30000);
});
