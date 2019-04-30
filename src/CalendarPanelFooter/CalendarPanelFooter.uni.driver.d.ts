import {BaseUniDriver} from 'wix-ui-test-utils/unidriver';

export interface CalendarPanelFooterDriver extends BaseUniDriver {
  isPrimaryButtonDisabled: Promise<boolean>;
  getSelectedDaysText: () => Promise<string>;
  getPrimaryActionButtonLabel: () => Promise<string>;
  getSecondaryActionButtonLabel: () => Promise<string>;
  clickOnPrimaryButton: () => Promise<void>;
  clickOnSecondaryButton: () => Promise<void>;
}
