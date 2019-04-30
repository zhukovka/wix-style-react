import * as React from 'react';
import { InjectedFocusableProps } from '../index';

export interface ThumbnailProps extends InjectedFocusableProps {
  dataHook?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: React.ReactNode;
  size?: ThumbnailSize;
  selected?: boolean;
  disabled?: boolean;
  hideSelectedIcon?: boolean;
  backgroundImage?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>,
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
}

export type ThumbnailSize = 'tiny' | 'small' | 'medium';

export default class Thumbnail extends React.PureComponent<ThumbnailProps> {}
