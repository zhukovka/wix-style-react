import eyes from 'eyes.it';
import ButtonDriver from '../../testkit/Button';

describe('Button', () => {
  let driver;
  eyes.it('should have button', () => {
    driver = new ButtonDriver({id: 'main-example', find: selector => $(selector)});
    browser.get('iframe.html?selectedKind=Components&selectedStory=Button');
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf($('#main-example')), 15000);

    driver.click(); //TODO: integrate testkit here?
    expect($('#main-example-label').getText()).toBe('clicked!');
  }, 30000);
});
