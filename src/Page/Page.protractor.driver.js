import s from './Page.scss';

const titleElement = component => component.$(`[data-hook="page-header-title"]`);

const pageDriverFactory = component => ({
  element: () => component,
  scrollDown: async () => {
    const element = await component.$(`.${s.scrollableContent}`);
    await browser.executeScript('arguments[0].scrollTop = 200;', await element.getWebElement());
  },
  titleExists: () => titleElement(component).isPresent(),
  titleElement: () => titleElement(component)
});

export default pageDriverFactory;
