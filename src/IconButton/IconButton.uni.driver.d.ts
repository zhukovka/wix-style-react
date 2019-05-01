import {BaseUniDriver} from "wix-ui-test-utils/unidriver";

export interface IconButtonDriver extends BaseUniDriver {
    isButtonDisabled: () => Promise<boolean>;
}