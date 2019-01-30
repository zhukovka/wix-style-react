import React from 'react';

import { Cell, Layout } from '../../../src';
import LiveCodeExample from '../../utils/Components/LiveCodeExample';
import { Section } from '../../UXStoryTemplate';

const Example = `class CommandsExample extends React.Component {
  render() {
    const handleClick1 = () => this.inputRef.focus();

    const handleClick2 = () => {
      this.inputRef.focus();
      setTimeout(() => this.inputRef.blur(), 1000);
    };

    const handleClick3 = () => {
      this.inputRef.focus();
      this.inputRef.select();
    };

    return (
      <div>
        <div style={{ width: '500px', margin: '1rem 0' }}>
          <Input theme={this.props.theme} ref={r => this.inputRef = r} />
        </div>
        <div style={{ width: '500px', display: 'flex', justifyContent: 'space-between' }}>
          <Button secondary onClick={handleClick1}>Focus</Button>
          <Button secondary onClick={handleClick2}>
            Focus &amp; blur 1 second later  
          </Button>
          <Button secondary onClick={handleClick3}>Select text</Button>
        </div>
      </div>
    );
  }
}`;

export default () => {
  return (
    <Section title="Using Instance Methods">
      <Layout>
        <Cell span={5}>
          <LiveCodeExample
            compact
            title="Click buttons to trigger the Input's instance methods"
            initialCode={Example}
          />
        </Cell>
      </Layout>
    </Section>
  );
};
