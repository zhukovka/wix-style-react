import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.protractor.driver';
import {isFocused} from '../test-common';

const driverFactory = component => {
  const dropdownLayoutDriver = dropdownLayoutDriverFactory(component.$('[data-hook="dropdown-layout-wrapper"]'));
  const input = component.$(`input`);

  return {
    ...dropdownLayoutDriver,
    click: () => component.click(),
    getInput: () => input,
    isFocused: () => isFocused(input),
    element: () => component
  };
};

export default driverFactory;
