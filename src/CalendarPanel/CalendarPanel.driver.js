import calendarDriverFactory from '../Calendar/Calendar.driver';
import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.driver';

const calendarPanelDriverFactory = ({ element, wrapper }) => {
  const dropdownLayoutElement = () =>
    element.querySelector('[data-hook=dropdown-layout]');
  const calendarElement = () => element.querySelector('[data-hook=calendar]');
  const getCalendarDriver = () =>
    calendarDriverFactory({ element: calendarElement(), wrapper });
  const dropdownLayoutDriver = () =>
    dropdownLayoutDriverFactory({ element: dropdownLayoutElement(), wrapper });

  const driver = {
    exists: () => !!element,
    calendarDriver: () => getCalendarDriver(),
    presetsDropdownLayoutDriver: () => dropdownLayoutDriver(),
    isDropdownExists: () => Boolean(dropdownLayoutElement()),
    findByDataHook: dataHook =>
      element.querySelector(`[data-hook=${dataHook}]`),
  };

  return driver;
};

export default calendarPanelDriverFactory;
