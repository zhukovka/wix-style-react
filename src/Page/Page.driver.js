const backgroundImageSelector = '[data-hook="page-background-image"]';

export default ({element}) => ({
  exists: () => !!element,
  backgroundImageExists: () => !!element.querySelector(backgroundImageSelector)
});
