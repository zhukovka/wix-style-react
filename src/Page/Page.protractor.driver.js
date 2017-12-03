const titleElement = component => component.$(`[data-hook="page-header-title"]`);
const scrollableContentElement = component => component.$('[data-hook="page-scrollable-content"]');

const pageDriverFactory = component => ({
  element: () => component,
  scrollDown: async () => {
    const element = scrollableContentElement(component);
    await browser.executeScript('arguments[0].scrollTop = 200;', await element.getWebElement());
  },
  titleExists: () => titleElement(component).isPresent(),
  titleElement: () => titleElement(component)
});

export default pageDriverFactory;
