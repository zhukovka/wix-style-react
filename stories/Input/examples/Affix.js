import React from 'react';

import { Cell, Layout } from '../../../src';
import LiveCodeExample from '../../utils/Components/LiveCodeExample';
import { Section } from '../../UXStoryTemplate';

export default () => {
  return (
    <Section title="Affix">
      <Layout>
        <Cell span={3}>
          <LiveCodeExample
            compact
            title="Custom prefix"
            initialCode={'<Input prefix="https://" />'}
          />
        </Cell>
        <Cell span={3}>
          <LiveCodeExample
            compact
            title="Custom suffix"
            initialCode={'<Input suffix={<Input.Affix>$</Input.Affix>} />'}
          />
        </Cell>
        <Cell span={3}>
          <LiveCodeExample
            compact
            title="Custom prefix & suffix"
            initialCode={
              '<Input prefix={<Input.Affix>https://</Input.Affix>} suffix=".com" />'
            }
          />
        </Cell>
        <Cell span={3}>
          <LiveCodeExample
            compact
            title="Custom prefix & suffix with error"
            initialCode={
              '<Input prefix={<Input.Affix>@</Input.Affix>} suffix="$" status="error" />'
            }
          />
        </Cell>
      </Layout>
    </Section>
  );
};
