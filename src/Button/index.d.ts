import * as React from 'react';
import {IconElement} from '..';

export interface ButtonProps {
  as?: any;
  className?: string;
  skin?: ButtonSkin;
  priority?: ButtonPriority;
  size?: ButtonSize;
  onClick?: React.MouseEventHandler<HTMLElement>;
  fullWidth?: boolean;
  suffixIcon?: IconElement;
  prefixIcon?: IconElement;
  disabled?: boolean;
  dataHook?: string;
}

export default class Button extends React.Component<ButtonProps> {}

export type ButtonSkin =
  | 'standard'
  | 'inverted'
  | 'destructive'
  | 'premium'
  | 'dark'
  | 'light'
  | 'transparent'
  | 'premium-light';

export type ButtonPriority = 'primary' | 'secondary';

export type ButtonSize = 'tiny' | 'small' | 'medium' | 'large';
