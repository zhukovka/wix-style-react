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
export {default as Breadcrumbs, BreadcrumbsProps} from './Breadcrumbs';
export {default as Button, ButtonProps} from './Button';
export {default as Calendar, CalendarProps} from './Calendar';
export {default as CalendarPanel, CalendarPanelProps} from './CalendarPanel';
export {default as CalendarPanelFooter, CalendarPanelFooterProps} from './CalendarPanelFooter';
export {default as Card, CardProps} from './Card';
export {default as CardGalleryItem, CardGalleryItemProps} from './CardGalleryItem';

export {default as TimeInput, TimeInputProps} from './TimeInput';
export {default as ToggleSwitch, ToggleSwitchProps} from './ToggleSwitch';
export {default as Tooltip, TooltipProps} from './Tooltip';
export {default as VBox, VBoxProps} from './VBox';

//   type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
//   type Subtract<T, K extends T> = Pick<T, Exclude<keyof T, keyof K>>;
