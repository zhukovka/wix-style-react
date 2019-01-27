import inputDriverFactory from '../Input/Input.driver';
import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.driver';
import deprecationLog from '../utils/deprecationLog';

const inputWithOptionsDriverFactory = ({ element }) => {
  const inputWrapper = element && element.childNodes[0];
  const inputDriver =
    element &&
    inputDriverFactory({
      element: inputWrapper.childNodes[0],
      wrapper: inputWrapper,
    });
  const dropdownLayoutDriver =
    element &&
    dropdownLayoutDriverFactory({
      element: element.childNodes[1].childNodes[0],
    });

  const createDeprecationMessageForKeyMethod = methodName =>
    deprecationLog(
      `InputWithOptions testkit method "${methodName}" is deprecated. Use "pressKey" with the appropriate key mame instead.`,
    );

  const assertOptionsOpen = () => {
    if (!dropdownLayoutDriver.isShown()) {
      inputDriver.focus();
      inputDriver.keyDown('ArrowDown');
      if (!dropdownLayoutDriver.isShown()) {
        throw new Error('Options dropdown should be open!');
      }
    }
  };

  const driver = {
    exists: () => !!element,
    /** Select an option by id. (If dropdown options is not opened yet, this will open it and click on the option) */
    selectOptionById: id => {
      // Although it is not necessary for options to be shown in order to simulate an option click.
      // We assert that the options ARE shown, so to simulate real user behavior.
      assertOptionsOpen();
      dropdownLayoutDriver.optionById(id).click();
    },
    isReadOnly: () =>
      inputDriver.getReadOnly() && inputWrapper.className.includes('readonly'),
    inputWrapper: () => inputWrapper,
    focus: () => inputDriver.focus(),
    blur: () => dropdownLayoutDriver.mouseClickOutside(),
    pressKey: key => inputDriver.keyDown(key),
    outsideClick: () =>
      document.body.dispatchEvent(new Event('mouseup', { cancelable: true })),
    isOptionWrappedToHighlighter: optionId => {
      const { element: optionElm } = dropdownLayoutDriver.optionById(optionId);
      return !!optionElm().querySelector(`[data-hook=highlighter-${optionId}]`);
    },

    // Deprecated key press methods
    pressDownKey: () => {
      createDeprecationMessageForKeyMethod('pressDownKey');
      inputDriver.keyDown('ArrowDown');
    },
    pressUpKey: () => {
      createDeprecationMessageForKeyMethod('pressUpKey');
      inputDriver.keyDown('ArrowUp');
    },
    pressAnyKey: () => {
      createDeprecationMessageForKeyMethod('pressAnyKey');
      inputDriver.keyDown('Any');
    },
    pressEnterKey: () => {
      createDeprecationMessageForKeyMethod('pressEnterKey');
      inputDriver.keyDown('Enter');
    },
    pressSpaceKey: () => {
      createDeprecationMessageForKeyMethod('pressSpaceKey');
      inputDriver.keyDown(' ');
    },
    pressTabKey: () => {
      createDeprecationMessageForKeyMethod('pressTabKey');
      inputDriver.keyDown('Tab');
    },
    pressEscKey: () => {
      createDeprecationMessageForKeyMethod('pressEscKey');
      inputDriver.keyDown('Escape');
    },
  };

  return {
    exists: () => driver.exists(),
    driver,
    inputDriver,
    dropdownLayoutDriver,
  };
};

export default inputWithOptionsDriverFactory;
