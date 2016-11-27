describe('Button', () => {

  it('should have button', () => {
    browser.get('iframe.html?selectedKind=Components&selectedStory=Button');

    expect($('#main-example').getText()).toBe('Click Me!');
  }, 30000);
});
