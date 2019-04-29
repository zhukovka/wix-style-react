import * as React from 'react';

export interface BoxProps {
  inline?: boolean;
  direction?: BoxDirection;
  align?: BoxHorizontalAlignment;
  verticalAlign?: BoxVerticalAlignment;
  dataHook?: string;
  padding?: React.CSSProperties['padding'];
  paddingTop?: React.CSSProperties['padding'];
  paddingRight?: React.CSSProperties['paddingRight'];
  paddingBottom?: React.CSSProperties['paddingBottom'];
  paddingLeft?: React.CSSProperties['paddingLeft'];
  margin?: React.CSSProperties['margin'];
  marginTop?: React.CSSProperties['marginTop'];
  marginRight?: React.CSSProperties['marginRight'];
  marginBottom?: React.CSSProperties['marginBottom'];
  marginLeft?: React.CSSProperties['marginLeft'];
  minWidth?: React.CSSProperties['minWidth'];
  maxWidth?: React.CSSProperties['maxWidth'];
  width?: React.CSSProperties['width'];
  minHeight?: React.CSSProperties['minHeight'];
  maxHeight?: React.CSSProperties['maxHeight'];
  height?: React.CSSProperties['height'];
  color?: React.CSSProperties['color'];
  backgroundColor?: React.CSSProperties['backgroundColor'];
  borderColor?: React.CSSProperties['borderColor'];
  borderTopColor?: React.CSSProperties['borderTopColor'];
  borderRightColor?: React.CSSProperties['borderRightColor'];
  borderBottomColor?: React.CSSProperties['borderBottomColor'];
  borderLeftColor?: React.CSSProperties['borderLeftColor'];
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
