import * as React from 'react';
import {CalendarValue} from '../Calendar';

export interface CalendarPanelFooterProps {
  primaryActionLabel: string;
  secondaryActionLabel: string;
  primaryActionDisabled: boolean;
  primaryActionOnClick: React.MouseEventHandler<HTMLElement>;
  secondaryActionOnClick: React.MouseEventHandler<HTMLElement>;
  dateToString: (date: Date) => string;
  selectedDays?: CalendarValue;
  dataHook?: string;
}

export default class CalendarPanelFooter extends React.PureComponent<
  CalendarPanelFooterProps
> {}
