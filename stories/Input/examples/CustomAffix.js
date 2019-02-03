import React from 'react';

import { Cell, Layout } from '../../../src';
import LiveCodeExample from '../../utils/Components/LiveCodeExample';
import createInputExample from './createInputExample';
import { Section } from '../../UXStoryTemplate';
import Input from '../../../src/Input/Input';

export default () => {
  return (
    <Section title="Custom Affix">
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
            initialCode={
              '<Input suffix={<Input.CustomAffix>$</Input.CustomAffix>} />'
            }
          />
        </Cell>
        <Cell span={3}>
          <LiveCodeExample
            compact
            title="Custom prefix & suffix"
            initialCode={
              '<Input prefix={<Input.CustomAffix>https://</Input.CustomAffix>} suffix=".com" />'
            }
          />
        </Cell>
        <Cell span={3}>
          <LiveCodeExample
            compact
            title="Custom prefix & suffix with error"
            initialCode={
              '<Input prefix={<Input.CustomAffix>@</Input.CustomAffix>} suffix="$" status="error" />'
            }
          />
        </Cell>
      </Layout>
    </Section>
  );
};
