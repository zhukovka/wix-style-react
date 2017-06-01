const inputDriverFactory = component => ({
  enterText: text => component.$('input').clear().sendKeys(text),
  getText: () => component.$('input').getAttribute('value'),
  element: () => component
});

export default inputDriverFactory;
