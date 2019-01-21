import inputDriverFactory from '../Input/Input.driver';
import calendarDriverFactory from '../Calendar/Calendar.driver';

const datePickerDriverFactory = ({ element }) => {
  const inputRoot = element && element.children[0].querySelector('.root');
  const inputDriver = inputDriverFactory({ element: inputRoot });
  const calendarDriver = calendarDriverFactory({ element });

  const driver = {
    exists: () => !!element,
    open: () => inputDriver.focus(),
  };

  return {
    driver,
    inputDriver,
    calendarDriver,
  };
};

export default datePickerDriverFactory;
