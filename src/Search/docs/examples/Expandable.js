import React from 'react';
import * as wsrScope from '../../..';
import { Layout, Cell } from '../../../Layout';
import LiveCodeExample from '../../../../stories/utils/LiveCodeExample';

export default () => (
  <Layout>
    <Cell span={6}>
      <LiveCodeExample
        scope={wsrScope}
        compact
        title="Click on the icon to expand search"
        initialCode={'<Search expandable />'}
      />
    </Cell>
  </Layout>
);
