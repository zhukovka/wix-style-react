const toggleSwitchDriverFactory = component => ({
  click: () => component.click(),
  element: () => component,
  checked: () => component.$('input').isSelected(),
  isXSmall: () => component.getAttribute('class').then(classes => classes.includes('toggleSwitchXSmall')),
  isSmall: () => component.getAttribute('class').then(classes => classes.includes('toggleSwitchSmall')),
  isLarge: () => component.getAttribute('class').then(classes => !classes.includes('toggleSwitchSmall') && !classes.includes('toggleSwitchXSmall'))
});

export default toggleSwitchDriverFactory;
