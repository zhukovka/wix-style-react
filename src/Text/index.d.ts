import * as React from 'react';
import { WrapperComponentProps } from 'wix-ui-core/dist/src/hocs/EllipsedTooltip/withEllipsedTooltip';

export interface TextProps extends WrapperComponentProps {
  ellipsed?: boolean;
  tagName?: string;
  className?: string;
  size?: TextSize;
  secondary?: boolean;
  skin?: TextSkin;
  light?: boolean;
  weight?: TextWeight;
}

export type TextSize = 'tiny' | 'small' | 'medium';
export type TextSkin = 'standard' | 'error' | 'success' | 'premium' | 'disabled';
export type TextWeight = 'thin' | 'normal' | 'bold';

const Text: React.SFC<TextProps>;
export default Text;
