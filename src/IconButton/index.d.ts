import * as React from 'react';

export interface IconButtonProps {
  as?: any;
  className?: string;
  skin?: IconButtonSkin;
  priority?: IconButtonPriority;
  size?: IconButtonSize;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  dataHook?: string;
}

export default class IconButton extends React.Component<IconButtonProps> {}

export type IconButtonSkin = 'standard' | 'inverted' | 'light';

export type IconButtonPriority = 'primary' | 'secondary';

export type IconButtonSize = 'small' | 'medium';
