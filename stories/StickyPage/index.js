import React from 'react';
import CodeExample from '../utils/Components/CodeExample';
import story from '../utils/Components/Story';
import StickyPage from 'wix-style-react/StickyPage';

import StickyPageExample from './DefaultStickyPage';
import StickyPageExampleRaw from '!raw-loader!./DefaultStickyPage';

const MyHeaderComponent = () => <div/>;
const MyContentComponent = () => <div/>;

const children = [];
children.push(<StickyPage.Header><MyHeaderComponent/></StickyPage.Header>);
children.push(<StickyPage.Content><MyContentComponent/></StickyPage.Content>);

story({
  category: 'Core',
  componentSrcFolder: 'StickyPage',
  componentProps: {
    children
  },
  examples: (
    <CodeExample title="Standard" code={StickyPageExampleRaw}>
      <StickyPageExample/>
    </CodeExample>
  )
});
