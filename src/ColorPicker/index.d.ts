import WixComponent, {WixComponentProps} from '../BaseComponents/WixComponent';
import ColorConstructor from 'color';

export interface ColorPickerProps extends WixComponentProps {
  value: ColorValue;
  onChange: (color: ColorValue) => void;
  onCancel: (color: ColorValue) => void;
  onConfirm: (color: ColorValue) => void;
  showHistory?: boolean;
  showConverter?: boolean;
  showInput?: boolean;
}

export default class ColorPicker extends WixComponent<ColorPickerProps> {}

export type ColorValue = any; // todo: @types/color doesn't export Color interface
