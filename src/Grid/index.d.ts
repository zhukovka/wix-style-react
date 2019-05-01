import * as React from 'react';

export interface ContainerProps {
  fluid?: boolean;
  className?: string;
  stretchVertically?: boolean;
}

export const Container: React.SFC<ContainerProps>;
export const RawContainer: React.SFC<ContainerProps>;

export interface RowProps {
  className?: string;
  rtl?: boolean;
  stretchViewsVertically?: boolean;
  dataHook?: string;
}

export class Row extends React.Component<RowProps> {}
export type ColumnsProps = RowProps;
export type Columns = Row

export interface ColProps {
  className?: string;
  span?: string | number;
  rtl?: boolean;
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
  dataHook?: string;
}

export class Col extends React.Component<ColProps> {}

export class AutoAdjustedRow extends React.Component {}
export type AutoAdjustedColumns = AutoAdjustedRow;
