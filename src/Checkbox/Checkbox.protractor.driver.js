import styles from './Checkbox.scss';

const checkboxDriverFactory = component => ({
  click: () => component.click(),
  getLabel: () => component.$(`label`),
  getInput: () => component.$(`input`),
  isChecked: () => component.$(`input`).isSelected(),
  isFocused: () => component.$('label').$('div').equals(browser.driver.switchTo().activeElement()),
  isDisabled: async () => await component.$(`input`).getAttribute('disabled') !== null,
  hasError: async () => (await component.getAttribute('class').includes(styles.hasError)),
  element: () => component
});

export default checkboxDriverFactory;
