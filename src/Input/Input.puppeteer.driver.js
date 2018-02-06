const inputDriverFactory = async (component, page) => {
  const input = await component.$('input');
  return {
    element: () => component,
    enterText: async text => input.type(text),
    getText: async () => page.evaluate(_input => _input.value, input)
  };
};

export default inputDriverFactory;
