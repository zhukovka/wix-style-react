import WixComponent, {WixComponentProps} from '../BaseComponents/WixComponent';
import {DayModifiers} from 'react-day-picker/types/common';

export interface CalendarProps extends WixComponentProps {
  autoFocus?: boolean;
  numOfMonths?: 1 | 2;
  className?: string;
  onChange: (value: CalendarValue, modifiers: DayModifiers) => void;
  onClose?: (e: React.MouseEvent<HTMLDivElement> | null) => void;
  excludePastDates?: boolean;
  filterDate?: (date: Date) => boolean;
  value?: CalendarValue;
  selectionMode?: CalenderSelectionMode;
  showYearDropdown?: boolean;
  showMonthDropdown?: boolean;
  shouldCloseOnSelect?: boolean;
  locale?: CalendarLocale;
}

export default class Calendar extends WixComponent<CalendarProps> {}

export type CalendarValue =
  | DateValue
  | {from?: DateValue; to?: DateValue};

type DateValue = string | Date;

export type CalenderSelectionMode = 'day' | 'range';

export type CalendarLocale =
  | CalenderLocaleString
  | {distanceInWords: any; format: any};

export type CalenderLocaleString =
  | 'en'
  | 'es'
  | 'pt'
  | 'fr'
  | 'de'
  | 'pl'
  | 'it'
  | 'ru'
  | 'ja'
  | 'ko'
  | 'tr'
  | 'sv'
  | 'no'
  | 'nl'
  | 'da';

 