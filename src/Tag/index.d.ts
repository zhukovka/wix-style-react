import WixComponent, { WixComponentProps } from '../BaseComponents/WixComponent';
import * as React from 'react';

export interface TagProps extends WixComponentProps {
  disabled?: boolean;
  id: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onRemove?(id: string): void;
  removable?: boolean;
  size?: TagSize;
  theme?: TagTheme;
  thumb?: React.ReactNode;
  maxWidth?: number;
  wrap?: boolean;
  className?: string;
}

export type TagSize = 'tiny' | 'small' | 'medium' | 'large';
export type TagTheme = 'standard' | 'error' | 'warning';

export default class Tag extends WixComponent<TagProps> {}
