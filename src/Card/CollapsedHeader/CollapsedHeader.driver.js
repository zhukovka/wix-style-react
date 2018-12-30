import ReactTestUtils from 'react-dom/test-utils';

const CollapsedHeaderDriverFactory = ({ element }) => {
  const title = element.querySelector('[data-hook="title"]');
  const subtitle = element.querySelector('[data-hook="subtitle"]');

  return {
    exists: () => !!element,
    title: () => title && title.innerHTML,
    subtitle: () => subtitle && subtitle.innerHTML,
    element: () => element,
    click: () => ReactTestUtils.Simulate.click(title),
    findByDatahook: dataHook =>
      element.querySelector(`[data-hook="${dataHook}"]`),
  };
};

export default CollapsedHeaderDriverFactory;
