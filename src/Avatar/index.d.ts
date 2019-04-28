import * as React from 'react';

export interface AvatarProps {
  name?: string;
  text?: string;
  placeholder?: string;
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  ariaLabel?: string;
  title?: string;
  size?:
    | 'size90'
    | 'size72'
    | 'size60'
    | 'size48'
    | 'size36'
    | 'size30'
    | 'size24'
    | 'size18';
  color?: 'blue' | 'green' | 'grey' | 'red' | 'orange';
  className?: string;
  dataHook?: string;
}

declare const Avatar: React.SFC<AvatarProps>;
export default Avatar;
