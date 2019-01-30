import React from 'react';

import { Cell, Layout } from '../../../src';
import LiveCodeExample from '../../utils/Components/LiveCodeExample';
import createInputExample from './createInputExample';
import { Section } from '../../UXStoryTemplate';

export default () => {
  return (
    <Section title="Unit">
      <Layout>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Displaying unit"
            initialCode={createInputExample({ unit: '#' })}
          />
        </Cell>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Unit with error"
            initialCode={createInputExample({
              status: 'error',
              unit: '$',
            })}
          />
        </Cell>
      </Layout>
    </Section>
  );
};
