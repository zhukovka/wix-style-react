import * as React from 'react';
import { ButtonProps } from '../Button';

export interface TextButtonProps extends ButtonProps {
  skin?: TextButtonSkin;
  underline?: TextButtonUnderline;
  weight?: TextButtonWeight;
  size?: TextButtonSize;
  target?: string;
}

export type TextButtonSkin = 'standard' | 'light' | 'premium' | 'dark';
export type TextButtonUnderline = 'none' | 'onHover' | 'always';
export type TextButtonWeight = 'thin' | 'normal';
export type TextButtonSize = 'small' | 'medium';

export default class TextButton extends React.Component<TextButtonProps> {}
