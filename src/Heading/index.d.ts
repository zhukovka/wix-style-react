import * as React from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  light?: boolean;
  appearance?: HeadingAppearance;
}

declare const Heading: React.SFC<HeadingProps>;
export default Heading;

export type HeadingAppearance = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
