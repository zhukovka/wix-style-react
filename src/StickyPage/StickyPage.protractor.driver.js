import s from './StickyPage.scss';

const stickyPageDriverFactory = component => ({
  element: () => component,
  scrollDown: async () => {
    const element = await component.$(`.${s.scrollableContent}`);
    await browser.executeScript('arguments[0].scrollTop = 200;', await element.getWebElement());
  },
  isHeaderMinimized: () => component.$$(`.minimized`).count().then(count => count > 0)
});

export default stickyPageDriverFactory;
