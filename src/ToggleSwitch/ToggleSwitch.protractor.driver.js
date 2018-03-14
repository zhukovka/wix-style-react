import styles from './ToggleSwitch.scss';
import {isFocused} from '../test-common';

const toggleSwitchDriverFactory = component => ({
  click: () => component.click(),
  element: () => component,
  checked: () => component.$('input').isSelected(),
  isXSmall: () => component.getAttribute('class').then(classes => classes.includes(styles.toggleSwitchXSmall)),
  isSmall: () => component.getAttribute('class').then(classes => classes.includes(styles.toggleSwitchSmall)),
  isLarge: () => component.getAttribute('class').then(classes => !classes.includes(styles.toggleSwitchSmall) && !classes.includes(styles.toggleSwitchXSmall)),
  isFocused: () => isFocused(component.$('label'))
});

export default toggleSwitchDriverFactory;
