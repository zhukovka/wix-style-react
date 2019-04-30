import { baseUniDriverFactory } from '../../../test/utils/unidriver';
import { testkit as inputDriverFactory } from '../../Input/Input.uni.driver';
import { buttonDriverFactory } from '../../Button/Button.uni.driver';

export const editableRowUniDriverFactory = base => {
  const input = base.$('[data-hook="edit-row-input"]');
  const approveBtn = base.$('[data-hook="edit-row-approve-button"]');
  const cancelBtn = base.$('[data-hook="edit-row-cancel-button"]');

  const inputDriver = inputDriverFactory(input);
  const approveBtnDriver = buttonDriverFactory(approveBtn);
  const cancelBtnDriver = buttonDriverFactory(cancelBtn);

  return {
    ...baseUniDriverFactory(base),
    isInputFocused: () => inputDriver.isFocus(),
    clickApprove: () => approveBtnDriver.click(),
    isApproveDisabled: () => approveBtnDriver.isButtonDisabled(),
    clickCancel: () => cancelBtnDriver.click(),
    getText: () => inputDriver.getValue(),
    setText: text => inputDriver.enterText(text),
    keyDown: keyCode => inputDriver.trigger('keyDown', { keyCode }),
  };
};
