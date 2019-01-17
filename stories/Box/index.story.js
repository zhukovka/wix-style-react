import React from 'react';

import { storySettings } from './storySettings';
import Box from '../../src/Box';
import LiveCodeExample from '../utils/Components/LiveCodeExample';
import ExampleMultipleBoxes from '!raw-loader!./ExampleMultipleBoxes';

const childrenExamples = [
  {
    label: 'Text',
    value: <span>Here is a simple text</span>,
  },
  {
    label: 'Multiple direct children',
    value: [
      <Box
        align="center"
        verticalAlign="middle"
        margin={1}
        width={80}
        height={80}
        color="D70"
        backgroundColor="B10"
        borderRadius={3}
        key={1}
      >
        Blue
      </Box>,
      <Box
        align="center"
        verticalAlign="middle"
        margin={1}
        width={80}
        height={80}
        color="D70"
        backgroundColor="R10"
        borderRadius={3}
        key={2}
      >
        Red
      </Box>,
      <Box
        align="center"
        verticalAlign="middle"
        margin={1}
        width={80}
        height={80}
        color="D70"
        backgroundColor="G10"
        borderRadius={3}
        key={3}
      >
        Green
      </Box>,
    ],
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Box,
  componentPath: '../../src/Box',

  componentProps: () => ({
    children: childrenExamples[0].value,
    inline: false,
    direction: 'horizontal',
    align: 'center',
    verticalAlign: 'middle',
    padding: 1,
    minHeight: 200,
    color: 'P00',
    backgroundColor: 'B50',
    dataHook: storySettings.dataHook,
  }),

  exampleProps: {
    children: childrenExamples,
  },

  examples: (
    <div>
      <LiveCodeExample
        compact
        title="Multiple Boxes"
        initialCode={ExampleMultipleBoxes}
      />
    </div>
  ),
};
