const inputDriverFactory = component => ({
  enterText: text => component.$('input').clear().sendKeys(text),
  getText: () => component.$('input').getText(),
  element: () => component
});

export default inputDriverFactory;
