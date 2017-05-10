const hasClass = (element, cls) => {
  const normalized = cls.toLowerCase().replace('.', '_');
  return element.getAttribute('class').then(classes => classes.includes(`__${normalized}__`));
};

export default component => ({
  element: () => component,
  isOfType: type => hasClass(component, type),
  isOfAppearance: appearance => hasClass(component, appearance),
  isOfAlignment: alignment => hasClass(component, alignment),
  text: () => component.getText()
});
