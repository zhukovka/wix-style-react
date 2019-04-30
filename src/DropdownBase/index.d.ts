import * as React from 'react';
import {
  DropdownLayoutOption,
  DropdownLayoutValueOption
} from '../DropdownLayout';

export interface DropdownBaseProps {
  dataHook?: string;
  open?: boolean;
  placement?: PopoverPlacement; // todo: should be imported from Popover
  appendTo?: PopoverAppendTo; // todo: should be imported from Popover
  showArrow?: boolean;
  onClickOutside?: (e: TouchEvent | MouseEvent) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onSelect?: (
    option: DropdownLayoutValueOption,
    sameOptionWasPicked: boolean
  ) => void;
  minWidth?: number;
  maxWidth?: number;
  children?:
    | React.ReactNode
    | ((data: {
        open: () => void;
        close: () => void;
        toggle: () => void;
        delegateKeyDown: React.KeyboardEventHandler<HTMLElement>;
        selectedOption: DropdownLayoutValueOption;
      }) => JSX.Element);
  options?: DropdownLayoutOption[];
  selectedId?: string | number;
  initialSelectedId?: string | number;
}

export default class DropdownBase extends React.PureComponent<
  DropdownBaseProps
> {}

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
