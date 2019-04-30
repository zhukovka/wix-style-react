import * as React from 'react';

export interface DropdownBaseProps {
  dataHook?: string;
  open?: boolean;
  placement?: PopoverPlacement; // todo: should be imported from Popover
  appendTo?: PopoverAppendTo; // todo: should be imported from Popover
  showArrow?: boolean;
  onClickOutside?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onSelect?: (selectedOption: DropdownBaseOption) => void;
  minWidth?: number;
  maxWidth?: number;
  children?:
    | React.ReactNode
    | ((data: {
        open: () => void;
        close: () => void;
        toggle: () => void;
        delegateKeyDown: React.KeyboardEventHandler<HTMLElement>;
        selectedOption: DropdownBaseOption;
      }) => JSX.Element);
  options?: DropdownBaseOption[];
  selectedId?: string | number;
  initialSelectedId?: string | number;
}

export default class DropdownBase extends React.PureComponent<
  DropdownBaseProps
> {}

export type DropdownBaseOption = DropdownBaseDivier | DropdownBaseValue;

export type DropdownBaseDivier = {value: '-'};

export type DropdownBaseValue = {
  id: string | number;
  value: React.ReactNode | string | RenderOptionFn;
  disabled?: boolean;
  overrideStyle?: boolean;
};

export type RenderOptionFn = (options: {selected: boolean}) => JSX.Element; // todo: should be imported from dropdown layout

type PopoverAppendTo =
  | 'scrollParent'
  | 'viewport'
  | 'window'
  | 'parent'
  | Element;

type PopoverPlacement =
  | 'auto-start'
  | 'auto'
  | 'auto-end'
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'bottom-end'
  | 'bottom'
  | 'bottom-start'
  | 'left-end'
  | 'left'
  | 'left-start';
