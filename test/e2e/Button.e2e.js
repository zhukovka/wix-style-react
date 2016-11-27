describe('Button', () => {

  it('should have button', () => {
    browser.get('iframe.html?selectedKind=Components&selectedStory=Button');
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf($('#main-example')), 15000);

    $('#main-example').click(); //TODO: integrate testkit here?
    expect($('#main-example-label').getText()).toBe('clicked!');
  }, 30000);
});
