import React from 'react';
import Checkbox from '..';
import { Languages } from 'wix-ui-icons-common';
import CodeExample from 'wix-storybook-utils/CodeExample';

import ExampleFormField from './ExampleFormField';
import ExampleFormFieldRaw from '!raw-loader!./ExampleFormField';

import { storySettings } from './storySettings';

const labelExamples = [
  { label: 'Simple string', value: 'Hello World!' },
  {
    label: 'Component',
    value: (
      <span key={0}>
        Hello <strong>World!</strong>
      </span>
    ),
  },
  {
    label: 'Component with icon',
    value: (
      <span key={1}>
        Hello <Languages />
      </span>
    ),
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Checkbox,
  componentPath: '..',

  componentProps: setState => ({
    children: labelExamples[0].value,
    onChange: ({ target: { checked } }) => setState({ checked }),
    errorMessage: '',
    hasError: false,
    dataHook: 'storybook-checkbox',
  }),

  exampleProps: {
    children: labelExamples,
    onChange: ({ target: { checked } }) => (checked ? 'Checked' : 'Unchecked'),
  },

  examples: (
    <CodeExample title="Composition with FormField" code={ExampleFormFieldRaw}>
      <ExampleFormField />
    </CodeExample>
  ),
};
