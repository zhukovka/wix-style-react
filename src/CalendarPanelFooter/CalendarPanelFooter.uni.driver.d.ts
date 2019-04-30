import {BaseUniDriver} from 'wix-ui-test-utils/unidriver';

export interface CalendarPanelFooterDriver extends BaseUniDriver {
  isPrimaryButtonDisabled: boolean;
  getSelectedDaysText: () => string;
  getPrimaryActionButtonLabel: () => string;
  getSecondaryActionButtonLabel: () => string;
  clickOnPrimaryButton: () => void;
  clickOnSecondaryButton: () => void;
}
