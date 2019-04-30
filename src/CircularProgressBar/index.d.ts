import * as React from 'react';

export interface CircularProgressBarProps {
  value?: number | string;
  error?: boolean;
  errorLabel?: string;
  showProgressIndication?: boolean;
  errorMessage?: string;
  light?: boolean;
  size?: CircularProgressBarSize;
}

declare const CircularProgressBar: React.SFC<CircularProgressBarProps>;
export default CircularProgressBar;

export type CircularProgressBarSize = 'small' | 'medium' | 'large';
