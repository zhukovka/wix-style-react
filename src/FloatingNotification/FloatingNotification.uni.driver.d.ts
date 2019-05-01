import {BaseUniDriver} from 'wix-ui-test-utils/unidriver';

export interface FloatingNotificationDriver extends BaseUniDriver {
  clickButton: () => Promise<void>;
  getButtonLabel: () => Promise<string>;
  clickTextButton: () => Promise<void>;
  getTextButtonLabel: () => Promise<string>;
  clickCloseButton: () => Promise<void>;
  getText: () => Promise<string>;
  isButtonAs: (as: any) => Promise<boolean>;
  getButtonHref: () => Promise<string | null>;
  isTextButtonAs: (as: any) => Promise<boolean>;
  getTextButtonHref: () => Promise<string | null>;
}
