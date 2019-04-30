import {ReactElement} from 'react';

export interface InjectedFocusableProps {
  onBlur?: () => void;
  onFocus?: () => void;
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
export {default as Checkbox, CheckboxProps} from './Checkbox';
export {default as CircularProgressBar, CircularProgressBarProps} from './CircularProgressBar';
export {default as CloseButton, CloseButtonProps} from './CloseButton';
export {default as Collapse, CollapseProps} from './Collapse';
export {default as ColorPicker, ColorPickerProps} from './ColorPicker';
export {default as CounterBadge, CounterBadgeProps} from './CounterBadge';
export {default as DatePicker, DatePickerProps} from './DatePicker';
export {default as DropdownBase, DropdownBaseProps} from './DropdownBase';
export {default as DropdownLayout, DropdownLayoutProps} from './DropdownLayout';
export {default as EditableSelector, EditableSelectorProps} from './EditableSelector';
export {default as EmptyState, EmptyStateProps} from './EmptyState';
export {default as EndorseContentLayout, EndorseContentLayoutProps} from './EndorseContentLayout'

export {default as Label, LabelProps} from './Label';

export {TableToolbar} from './TableToolbar';
export {default as Tabs, TabsProps} from './Tabs';
export {default as Tag, TagProps} from './Tag';
export {default as Text, TextProps} from './Text';
export {default as TextButton, TextButtonProps} from './TextButton';
export {default as Thumbnail, ThumbnailProps} from './Thumbnail';
export {default as TimeInput, TimeInputProps} from './TimeInput';
export {default as ToggleSwitch, ToggleSwitchProps} from './ToggleSwitch';
export {default as Tooltip, TooltipProps} from './Tooltip';
export {default as VBox, VBoxProps} from './VBox';

//   type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
//   type Subtract<T, K extends T> = Pick<T, Exclude<keyof T, keyof K>>;
