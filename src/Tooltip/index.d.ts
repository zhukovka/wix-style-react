import * as React from 'react';
import {
  WixComponentProps,
} from '../BaseComponents/WixComponent';
import { Placement } from 'wix-ui-core/popover';

export interface TooltipNewProps {
  upgrade: true;
  dataHook?: string;
  content?: React.ReactNode;
  textAlign?: TooltipNewTextAlign;
  enterDelay?: number;
  exitDelay?: number;
  moveBy?: { x?: number, y?: number };
  appendTo?: TooltipNewAppendTo;
  flip?: boolean;
  fixed?: boolean;
  maxWidth?: React.CSSProperties['maxWidth'];
  onShow?: () => void;
  onHide?: () => void;
  placement?: Placement;
  size?: TooltipNewSize;
  zIndex?: React.CSSProperties['zIndex'];
}

export interface TooltipOldProps extends WixComponentProps {
  upgrade?: false;
  content: React.ReactNode;
  textAlign?: React.CSSProperties['textAlign'];
  placement?: TooltipOldPlacement;
  alignment?: TooltipOldAlignment;
  theme?: TooltipOldTheme;
  showDelay?: number;
  hideDelay?: number;
  showTrigger?: TooltipOldShowTrigger;
  hideTrigger?: TooltipOldHideTrigger;
  active?: boolean;
  bounce?: boolean;
  disabled?: boolean;
  popover?: boolean;
  maxWidth?: React.CSSProperties['maxWidth'];
  minWidth?: React.CSSProperties['minWidth'];
  onClickOutside?: (ev: TouchEvent | MouseEvent) => void;
  color?: React.CSSProperties['color'];
  lineHeight?: React.CSSProperties['lineHeight'];
  onShow?: () => void;
  onHide?: () => void;
  zIndex?: React.CSSProperties['zIndex'];
  appendToParent?: boolean;
  appendByPredicate?: (element: HTMLElement) => boolean;
  appendTo?: HTMLElement;
  moveBy?: { x?: number; y?: number };
  moveArrowTo?: number;
  size?: TooltipOldSize;
  shouldCloseOnClickOutside?: boolean;
  relative?: boolean;
  padding?: React.CSSProperties['padding'];
  shouldUpdatePosition?: boolean;
  showImmediately?: boolean;
  showArrow?: boolean;
}

export default class Tooltip extends React.PureComponent<TooltipNewProps | TooltipOldProps> {}

export type TooltipNewAppendTo = 'window' | 'scrollParent' | 'viewport' | 'parent';
export type TooltipNewTextAlign = 'center' | 'start';
export type TooltipNewSize = 'small' | 'medium';
export type TooltipOldPlacement = 'top' | 'right' | 'bottom' | 'left';
export type TooltipOldAlignment = 'top' | 'right' | 'bottom' | 'left' | 'center';
export type TooltipOldTheme = 'light' | 'dark' | 'error';
export type TooltipOldShowTrigger =
  | 'custom'
  | 'mouseenter'
  | 'mouseleave'
  | 'click'
  | 'focus'
  | 'blur';
export type TooltipOldHideTrigger =
  | 'custom'
  | 'mouseenter'
  | 'mouseleave'
  | 'click'
  | 'focus'
  | 'blur';
export type TooltipOldSize = 'normal' | 'large';
