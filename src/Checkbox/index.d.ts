import WixComponent, {WixComponentProps} from "../BaseComponents/WixComponent";

export interface CheckboxProps extends WixComponentProps {
    checked?: boolean;
    disabled?: boolean;
    hasError?: boolean;
    id?: string;
    indeterminate?: boolean;
    errorMessage?: string;
    hover?: boolean;
    size?: CheckboxSize;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
  }

  export default class Checkbox extends WixComponent<CheckboxProps> {}

  export type CheckboxSize = 'medium';