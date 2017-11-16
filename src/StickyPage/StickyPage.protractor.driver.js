import s from './StickyPage.scss';

const stickyPageDriverFactory = component => ({
  element: () => component,
  scrollDown: () => browser.executeScript(`document.querySelectorAll('.${s.scrollableContent}').forEach(x => x.scrollTo(0,200));`),
  isHeaderMinimized: () => component.$$(`.minimized`).count().then(count => count > 0)
});

export default stickyPageDriverFactory;
