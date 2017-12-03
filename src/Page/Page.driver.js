export default ({element}) => ({
  exists: () => !!element,
  backgroundImageExists: () => !!element.querySelector('[data-hook="page-background-image"]'),
  tailExists: () => !!element.querySelector('[data-hook="page-tail"]')
});
