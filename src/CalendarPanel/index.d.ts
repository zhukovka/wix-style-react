import * as React from 'react';
import {
  CalendarValue,
  CalendarSelectionMode,
  CalendarLocale,
  CalendarProps
} from '../Calendar';
import {
  DropdownLayoutValueOption,
  DropdownLayoutDividerOption
} from '../DropdownLayout';

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

export default class CalendarPanel extends React.Component<
  CalendarPanelProps
> {}

export type CalendarPanelPreset =
  | {
      id: string | number;
      selectedDays: SelectedDays;
    }
  | CalendarPanelPresetOption
  | DropdownLayoutDividerOption;

export type CalendarPanelPresetOption =  {
  selectedDays: SelectedDays;
} & DropdownLayoutValueOption;

type SelectedDays = Required<CalendarValue>;
