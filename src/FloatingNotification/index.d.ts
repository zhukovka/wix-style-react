import * as React from 'react';
import {IconElement} from '..';

export interface FloatingNotificationProps {
  dataHook?: string;
  className?: string;
  type?: FloatingNotificationTypes;
  showCloseButton?: boolean;
  onClose?: () => void;
  textButtonProps?: ButtonProps;
  buttonProps?: ButtonProps;
  prefixIcon?: IconElement;
  text?: string;
}

export default class FloatingNotification extends React.PureComponent<FloatingNotificationProps> {}

export type FloatingNotificationTypes =
  | 'standard'
  | 'success'
  | 'destructive'
  | 'warning'
  | 'premium';

export interface ButtonProps {
  label?: string;
  as?: any;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}