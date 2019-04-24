const subheaderDriverFactory = ({ element }) => {
  const title = element.querySelector('[data-hook="title"]');
  const titleNode = element.querySelector('[data-hook="title-node"]');
  const suffix = element.querySelector('[data-hook="suffix"]');

  return {
    exists: () => !!element,
    title: () => title && title.textContent,
    titleNode: () => titleNode,
    suffix: () => suffix,
  };
};

export default subheaderDriverFactory;
