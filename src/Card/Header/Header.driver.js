const headerDriverFactory = ({ element }) => {
  const title = element.querySelector('[data-hook="title"]');
  const subtitle = element.querySelector('[data-hook="subtitle"]');

  return {
    exists: () => !!element,
    title: () => title && title.textContent,
    subtitle: () => subtitle && subtitle.textContent,
  };
};

export default headerDriverFactory;
