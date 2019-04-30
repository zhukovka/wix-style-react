import * as React from 'react';

export interface CloseButtonProps {
  as?: any;
  className?: string;
  skin?: CloseButtonSkin;
  size?: CloseButtonSize;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  dataHook?: string;
}

export default class CloseButton extends React.Component<CloseButtonProps> {}

export type CloseButtonSkin =
  | 'standard'
  | 'standardFilled'
  | 'light'
  | 'lightFilled'
  | 'dark';

export type CloseButtonSize = 'small' | 'medium';
