import {BaseUniDriver} from 'wix-ui-test-utils/unidriver';

export interface ButtonDriver extends BaseUniDriver {
  getButtonTextContent: () => Promise<string>;
  isButtonDisabled: () => Promise<boolean>;
}
