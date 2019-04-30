const subheaderDriverFactory = ({ element }) => {
  const title = element.querySelector('[data-hook="title"]');
  const titleNode = dataHook =>
    element.querySelector(`[data-hook="${dataHook}"]`);
  const suffix = dataHook => element.querySelector(`[data-hook="${dataHook}"]`);

  return {
    exists: () => !!element,
    title: () => title && title.textContent,
    titleNodeByDataHook: dataHook => titleNode(dataHook),
    suffixNodeByDataHook: dataHook => suffix(dataHook),
  };
};

export default subheaderDriverFactory;
