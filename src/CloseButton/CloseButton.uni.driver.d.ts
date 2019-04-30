import {BaseUniDriver} from 'wix-ui-test-utils/unidriver';

export interface CloseButtonDriver extends BaseUniDriver {
  isButtonDisabled: () => Promise<boolean>;
}
