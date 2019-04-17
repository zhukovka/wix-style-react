import { ReactBase } from '../../test/utils/unidriver';
import { testkit as inputUniDriverFactory } from '../Input/Input.uni.driver';
import { dropdownLayoutDriverFactory } from '../DropdownLayout/DropdownLayout.uni.driver';

export const inputWithOptionsUniDriverFactory = base => {
  const inputWrapperSelector = '[data-input-parent]';
  const inputWrapper = base.$(inputWrapperSelector);
  const inputDriver = inputUniDriverFactory(
    base.$(`${inputWrapperSelector} > *:first-child `),
  );
  const dropdownLayoutDriver = dropdownLayoutDriverFactory(
    base.$(`[data-hook=dropdown-layout-wrapper] > *:first-child`),
  );

  const assertOptionsOpen = async () => {
    if (!(await dropdownLayoutDriver.isShown())) {
      await inputDriver.focus();
      await inputDriver.keyDown('ArrowDown');
      if (!(await dropdownLayoutDriver.isShown())) {
        throw new Error('Options dropdown should be open!');
      }
    }
  };

  const driver = {
    exists: () => base.exists(),
    /** Select an option by id. (If dropdown options is not opened yet, this will open it and click on the option) */
    selectOptionById: async id => {
      // Although it is not necessary for options to be shown in order to simulate an option click.
      // We assert that the options ARE shown, so to simulate real user behavior.
      await assertOptionsOpen();
      await (await dropdownLayoutDriver.optionById(id)).click();
    },
    isReadOnly: async () => await inputDriver.getReadOnly(),
    isEditable: async () =>
      !(await inputDriver.getReadOnly()) && !(await inputDriver.getDisabled()),
    /** @deprecated  Should be private */
    inputWrapper: () => inputWrapper.getNative(), // eslint-disable-line no-restricted-properties
    focus: () => inputDriver.focus(),
    blur: () => dropdownLayoutDriver.mouseClickOutside(),
    // TODO: use prerssKey instead of keyDown
    pressKey: async key => await inputDriver.keyDown({ key }),
    outsideClick: () => ReactBase.clickBody(),
    isOptionWrappedToHighlighter: async optionId => {
      const { element: optionElm } = await dropdownLayoutDriver.optionById(
        optionId,
      );
      return (
        (await optionElm().exists()) &&
        (await optionElm()
          .$(`[data-hook=highlighter-${optionId}]`)
          .exists())
      );
    },
  };

  return {
    exists: () => driver.exists(),
    driver,
    inputDriver,
    dropdownLayoutDriver,
  };
};
