import React from 'react';

import { Cell, Layout } from '../../../src';
import LiveCodeExample from '../../utils/Components/LiveCodeExample';
import createInputExample from './createInputExample';
import { Section } from '../../UXStoryTemplate';

export default () => {
  return (
    <Section title="Loader">
      <Layout>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Loading state"
            initialCode={createInputExample({ status: 'loading' })}
          />
        </Cell>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Loader with tooltip"
            initialCode={createInputExample({
              status: 'loading',
              statusMessage: 'Loading some data...',
            })}
          />
        </Cell>
      </Layout>
    </Section>
  );
};
