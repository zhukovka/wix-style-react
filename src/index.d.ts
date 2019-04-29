
import {ReactElement} from 'react';

export {default as Avatar, AvatarProps} from '../src/Avatar';
export type IconElement = ReactElement<any>;
//   type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
//   type Subtract<T, K extends T> = Pick<T, Exclude<keyof T, keyof K>>;