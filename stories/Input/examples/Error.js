import React from 'react';

import { Cell, Layout } from '../../../src';
import LiveCodeExample from '../../utils/Components/LiveCodeExample';
import createInputExample from './createInputExample';
import { Section } from '../../UXStoryTemplate';

export default () => {
  return (
    <Section title="Error">
      <Layout>
        <Cell span={3}>
          <LiveCodeExample
            compact
            title="Error state"
            initialCode={createInputExample({ status: 'error' })}
          />
        </Cell>
        <Cell span={3}>
          <LiveCodeExample
            compact
            title="Error with tooltip"
            initialCode={createInputExample({
              status: 'error',
              statusMessage: 'I am an error message',
            })}
          />
        </Cell>
        <Cell span={3}>
          <LiveCodeExample
            compact
            title="Disabled"
            initialCode={createInputExample({
              status: 'error',
              disabled: true,
              statusMessage: 'I am an error message',
            })}
          />
        </Cell>
      </Layout>
    </Section>
  );
};
