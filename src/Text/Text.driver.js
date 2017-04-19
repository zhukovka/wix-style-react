export default ({element}) => ({
  getType: () => element.tagName.toLowerCase(),
  getText: () => element.textContent,
  getClassName: () => element.className
});

