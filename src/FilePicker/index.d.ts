import WixComponent, {WixComponentProps} from "../BaseComponents/WixComponent";

export interface FilePickerProps extends WixComponentProps {
    header?: string;
    onChange?: (file: File) => void;
    mainLabel?: string;
    subLabel?: string;
    supportedFormats?: string;
    maxSize?: number;
    error?: boolean;
    errorMessage?: string;
    id?: string | number;
    name?: string;
  }

  export default class FilePicker extends WixComponent<FilePickerProps> {}