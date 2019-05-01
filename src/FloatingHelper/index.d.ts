import * as React from 'react';

export interface FloatingHelperProps {
  content: React.ReactNode;
  placement: FloatingHelperPlacement;
  target: React.ReactNode;
  appearance?: FloatingHelperAppearance;
  appendTo?: FloatingHelperAppendTo;
  initiallyOpened?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  opened?: boolean | undefined;
  width?: string | number;
}

export default class FloatingHelperClass extends React.Component<FloatingHelperProps> {
  static Content: React.SFC<FloatingHelperContentProps>
}

export type FloatingHelperAppearance = 'dark' | 'light';

export type FloatingHelperPlacement =
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
  
export type FloatingHelperAppendTo = 'scrollParent' | 'viewport' | 'window';

interface FloatingHelperContentProps {
  body: string;
  title?: string;
  actionText?: string;
  actionTheme?: FloatingHelperContentActionTheme;
  onActionClick?: () => void;
  image?: React.ReactNode;
  appearance?: 'dark' | 'light';
}

type FloatingHelperContentActionTheme = 'standard' | 'white' | 'premium';
