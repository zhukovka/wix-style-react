import {BaseUniDriver} from "wix-ui-test-utils/unidriver";
import {LabelDriver} from "../Label/Label.driver";

export interface CheckboxDriver extends BaseUniDriver {
    focus: Promise<void>,
    blur: Promise<void>,
    /**
     * @deprecated
     */
    hasFocusState: () => Promise<string | null>,
    isChecked: Promise<boolean>,
    isDisabled: () => Promise<boolean>,
    isIndeterminate: () => Promise<boolean>,
    hasError: () => Promise<boolean>,
    getLabel: () => Promise<string>,
    getLabelDriver: () => LabelDriver,
    getErrorMessage: () => Promise<string>
}
