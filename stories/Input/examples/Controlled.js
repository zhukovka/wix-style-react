import React from 'react';

import { Cell, Layout } from '../../../src';
import LiveCodeExample from '../../utils/Components/LiveCodeExample';
import { Section } from '../../UXStoryTemplate';

const Example = `class ControlledInput extends React.Component {
  
  constructor() {
    this.state = {
      value: 'Starwars',
      errorValue: 'Starwars',
    };
  }

  render() {
    const onChange = e => this.setState({ value: e.target.value });
    return (
      <Input
        value={this.state.value}
        onChange={onChange}
        error={this.state.value === this.state.errorValue}
      />
    );
  }
}`;

export default () => {
  return (
    <Section title="Controlling and Displaying error state">
      <Layout>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Will show error for 'Starwars'"
            initialCode={Example}
          />
        </Cell>
      </Layout>
    </Section>
  );
};
