import * as React from 'react';
import {
  CalendarValue,
  CalendarSelectionMode,
  CalendarLocale,
  CalendarProps
} from '../Calendar';

export interface CalendarPanelProps {
  dataHook?: string;
  className?: string;
  onChange?: (d: SelectedDays) => void; 
  onClose?: CalendarProps['onClose'];
  excludePastDates?: boolean;
  filterDate?: (date: Date) => boolean;
  value?: CalendarValue;
  selectionMode?: CalendarSelectionMode;
  showYearDropdown?: boolean;
  showMonthDropdown?: boolean;
  shouldCloseOnSelect?: boolean;
  locale?: CalendarLocale;
  presets?: CalendarPanelPreset[];
  footer?: (data: {
    selectedDays: CalendarValue;
    submitDisabled: boolean;
  }) => JSX.Element;
}

export default class CalendarPanel extends React.Component<CalendarPanelProps> {}

export type CalendarPanelPreset =
  | {
      id: string | number;
      value: React.ReactNode | string | RenderPresetFn;
      selectedDays: SelectedDays;
      disabled?: boolean;
      overrideStyle?: boolean;
    }
  | {
      id: string | number;
      selectedDays: SelectedDays;
    }
  | DIVIDER_OPTION_VALUE;

type DIVIDER_OPTION_VALUE = {value: '-'}; // todo: should be imported from dropdown layout
type SelectedDays = Required<CalendarValue>;

export type RenderPresetFn = (options: {selected: boolean}) => JSX.Element; // todo: should be imported from dropdown layout