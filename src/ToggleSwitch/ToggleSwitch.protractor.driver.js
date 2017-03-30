const toggleSwitchDriverFactory = component => ({
  click: () => component.click(),
  element: () => component,
  checked: () => component.$('input').isSelected(),
  isSmall: () => component.getAttribute('class').then(classes => classes.includes('toggleSwitchSmall')),
  isLarge: () => component.getAttribute('class').then(classes => !classes.includes('toggleSwitchSmall'))
});

export default toggleSwitchDriverFactory;
