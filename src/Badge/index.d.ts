import * as React from 'react';
import {InjectedFocusableProps, IconElement} from '..';

// should be re-exported from wix-ui-backoffice once the library
// exposes proper types
export interface BadgeProps extends InjectedFocusableProps {
  type?: BadgeType;
  skin?: BadgeSkin;
  size?: BadgeSize;
  prefixIcon?: IconElement;
  suffixIcon?: IconElement;
  onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  uppercase?: boolean;
}

export default class Badge extends React.PureComponent<BadgeProps> {}

export type BadgeSkin =
  | 'general'
  | 'standard'
  | 'danger'
  | 'success'
  | 'neutral'
  | 'warning'
  | 'urgent'
  | 'neutralStandard'
  | 'neutralSuccess'
  | 'nutralDanger'
  | 'premium';

export type BadgeType = 'solid' | 'outlined' | 'transparent';

export type BadgeSize = 'medium' | 'small';