
import {ReactElement} from 'react';

export interface InjectedFocusableProps {
  focusableOnFocus?: () => void;
  focusableOnBlur?: () => void;
}

export type IconElement = ReactElement<any>;

export {default as Avatar, AvatarProps} from '../src/Avatar';
export {default as Badge, BadgeProps} from '../src/Badge'
//   type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
//   type Subtract<T, K extends T> = Pick<T, Exclude<keyof T, keyof K>>;