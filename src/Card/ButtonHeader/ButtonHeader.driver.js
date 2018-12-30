import ReactTestUtils from 'react-dom/test-utils';

const buttonHeaderDriverFactory = ({ element }) => {
  const title = element.querySelector('[data-hook="title"]');
  const subtitle = element.querySelector('[data-hook="subtitle"]');
  const button = element.querySelector('[data-hook="button"]');

  return {
    exists: () => !!element,
    title: () => title && title.innerHTML,
    subtitle: () => subtitle && subtitle.innerHTML,
    element: () => element,
    buttonDataHook: () => 'button',
    click: () => ReactTestUtils.Simulate.click(button),
  };
};

export default buttonHeaderDriverFactory;
