import {BaseDriver} from "wix-ui-test-utils/driver-factory";

export interface FilePickerDriver extends BaseDriver {
    hasError: () => boolean,
    errorMessage: () => string,
    getInput: () => string,
    getSubLabel: () => string,
    getMainLabel: () => string,
    getName: () => string,
}