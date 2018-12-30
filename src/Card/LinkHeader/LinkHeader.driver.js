const linkHeaderDriverFactory = ({ element }) => {
  const title = element.querySelector('[data-hook="title"]');
  const subtitle = element.querySelector('[data-hook="subtitle"]');

  return {
    exists: () => !!element,
    title: () => title && title.innerHTML,
    subtitle: () => subtitle && subtitle.innerHTML,
    element: () => element,
    linkDataHook: () => 'link',
  };
};

export default linkHeaderDriverFactory;
