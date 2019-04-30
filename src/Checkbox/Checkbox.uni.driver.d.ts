import {BaseUniDriver} from "../../test/utils/unidriver";

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
    getLabelDriver: () => any, // todo: fix once label types are implemented
    getErrorMessage: () => Promise<string>
}
