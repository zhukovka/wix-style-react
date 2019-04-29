import * as React from 'react';

export interface BoxProps {
  inline?: boolean;
  direction?: BoxDirection;
  align?: BoxHorizontalAlignment;
  verticalAlign?: BoxVerticalAlignment;
  padding?: string | number;
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  margin?: string | number;
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  width?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  height?: string | number;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderTopColor?: string;
  borderRightColor?: string;
  borderBottomColor?: string;
  borderLeftColor?: string;
  dataHook?: string;
}

declare const Box: React.SFC<BoxProps>;
export default Box;

export type BoxDirection = 'horizontal' | 'vertical';

export type BoxHorizontalAlignment =
  | 'left'
  | 'center'
  | 'right'
  | 'space-between';

export type BoxVerticalAlignment =
  | 'top'
  | 'middle'
  | 'bottom'
  | 'space-between';

export type BoxSpacing = 'tiny' | 'small' | 'medium' | 'large';
