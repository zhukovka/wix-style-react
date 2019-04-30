import * as React from 'react';
import { Moment } from 'moment';

export interface TimeInputProps {
  dataHook?: string;
  dashesWhenDisabled?: boolean;
  defaultValue?: Moment;
  disableAmPm?: boolean;
  disabled?: boolean;
  onChange?(value: Moment): void;
  rtl?: boolean;
  style?: React.CSSProperties;
}

export default class TimeInput extends React.Component<TimeInputProps> {}
