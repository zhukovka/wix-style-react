import React from 'react';

import LiveCodeExample from '../../utils/Components/LiveCodeExample';

import ExamplesSkins from '!raw-loader!./ExamplesSkins';
import ExamplesSizes from '!raw-loader!./ExamplesSizes';

import { Layout, Cell } from '../../../src/Layout';
import styles from './ButtonsSpacing.scss';

class CloseButtonStory extends React.Component {
  render() {
    return (
      <Layout>
        <Cell span={6}>
          <LiveCodeExample
            compact
            scope={{ styles }}
            title="CloseButton - skins"
            initialCode={ExamplesSkins}
          />
        </Cell>
        <Cell span={6}>
          <LiveCodeExample
            compact
            scope={{ styles }}
            title="CloseButton - sizes"
            initialCode={ExamplesSizes}
          />
        </Cell>
      </Layout>
    );
  }
}

export default CloseButtonStory;
