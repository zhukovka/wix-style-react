import { BaseUniDriver, StylableUnidriverUtil } from 'wix-ui-test-utils/unidriver';
import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import button from 'wix-ui-core/dist/src/components/button-next/button-next.st.css';

export interface TextButtonDriver extends BaseUniDriver {
  getButtonTextContent(): Promise<string>;
  isButtonDisabled(): Promise<boolean>;
}
