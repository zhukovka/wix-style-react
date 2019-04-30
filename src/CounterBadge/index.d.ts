import * as React from 'react';

export interface CounterBadgeProps {
  skin?: CounterBadgeSkin;
  children?: CounterBadgeContent;
}

export default class CounterBadge extends React.PureComponent<CounterBadgeProps> {}

export type CounterBadgeSkin =
  | 'general'
  | 'standard'
  | 'danger'
  | 'warning'
  | 'urgent'
  | 'success';

export type CounterBadgeContent = string | number | React.ReactElement<any>;
