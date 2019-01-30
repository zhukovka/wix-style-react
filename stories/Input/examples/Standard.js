import React from 'react';

import { Cell, Layout } from '../../../src';
import LiveCodeExample from '../../utils/Components/LiveCodeExample';
import createInputExample from './createInputExample';
import { Section } from '../../UXStoryTemplate';

const ClearExample = `class WithClearButton extends React.Component {
  
  constructor() {
    this.state = {
      value: 'Clear me!',
    };
  }

  render() {
    const onChange = event => this.setState({ value: event.target.value });

    return (
      <Input placeholder="Write some text..." clearButton {...this.props} value={this.state.value} onChange={onChange} />
    );
  }
}`;

export default () => {
  return (
    <Section title="Standard">
      <Layout>
        <Cell span={3}>
          <LiveCodeExample
            compact
            title="Input"
            initialCode={createInputExample({})}
          />
        </Cell>
        <Cell span={3}>
          <LiveCodeExample
            compact
            title="With clear button"
            initialCode={ClearExample}
          />
        </Cell>
        <Cell span={3}>
          <LiveCodeExample
            compact
            title="Placeholder"
            initialCode={createInputExample({ placeholder: 'Search...' })}
          />
        </Cell>
        <Cell span={3}>
          <LiveCodeExample
            compact
            title="Disabled"
            initialCode={createInputExample({
              disabled: true,
              placeholder: 'Disabled',
            })}
          />
        </Cell>
      </Layout>
    </Section>
  );
};
