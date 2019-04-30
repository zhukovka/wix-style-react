import * as React from 'react';

export interface CollapseProps {
  open?: boolean;
  dataHook?: string;
}

declare const Collapse: React.SFC<CollapseProps>;

export default Collapse;
