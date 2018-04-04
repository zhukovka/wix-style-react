import styles from './ToggleSwitch.scss';
import focusableDriverFactory from '../common/Focusable/Focusable.protractor.driver';
import {mergeDrivers} from '../test-common';

const toggleSwitchDriverFactory = component => {
  const focusableDriver = focusableDriverFactory({
    rootElement: component,
    nativeFocusableElement: component.$$('label').get(0), // outer label
    clickableElements: [component]
  });

  const publicDriver = {
    click: () => component.click(),
    element: () => component,
    checked: () => component.$('input').isSelected(),
    isXSmall: () => component.getAttribute('class').then(classes => classes.includes(styles.toggleSwitchXSmall)),
    isSmall: () => component.getAttribute('class').then(classes => classes.includes(styles.toggleSwitchSmall)),
    isLarge: () => component.getAttribute('class').then(classes => !classes.includes(styles.toggleSwitchSmall) && !classes.includes(styles.toggleSwitchXSmall))
  };

  return mergeDrivers(publicDriver, focusableDriver);
};

export default toggleSwitchDriverFactory;
