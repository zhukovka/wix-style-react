import {ReactElement} from 'react';

export interface InjectedFocusableProps {
  focusableOnFocus?: () => void;
  focusableOnBlur?: () => void;
}

export type IconElement = ReactElement<any>;

export {default as Avatar, AvatarProps} from './Avatar';
export {default as Badge, BadgeProps} from './Badge';
export {default as BadgeSelect, BadgeSelectProps} from './BadgeSelect';
export {default as Box, BoxProps} from './Box';
export {default as VBox, VBoxProps} from './VBox';

//   type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
//   type Subtract<T, K extends T> = Pick<T, Exclude<keyof T, keyof K>>;
