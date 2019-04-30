import WixComponent, {WixComponentProps} from '../BaseComponents/WixComponent';
import {CalendarProps, CalendarLocale} from '../Calendar';

export type DatePickerProps = CalendarProps & WixComponentProps & {
  customInput?: React.ReactNode;
  inputProps?: any; // todo: add once Input types are implemented
  dateFormat?: string | ((date: Date) => string);
  disabled?: boolean;
  inputDataHook?: string;
  calendarDataHook?: string;
  placeholderText?: string;
  rtl?: boolean;
  value?: Date | string;
  isOpen?: boolean;
  initialOpen?: boolean;    
  error?: boolean;
  errorMessage?: React.ReactNode;
  width?: number;
  zIndex?: number;
}

export default class DatePicker extends WixComponent<DatePickerProps> {}
