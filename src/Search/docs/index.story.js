import React from 'react';
import Markdown from 'wix-storybook-utils/Markdown';

import Search from '..';
import { Predicate, Expandable } from './examples';

import { storySettings } from './storySettings';

const createOption = (value, id = 0) => ({ id, value });

const options = [
  'The quick',
  'brown',
  'fox',
  'jumps over',
  'the lazy',
  'dog',
  'Option1',
  'Option2',
  'Option3',
  'Option4',
  'Option5',
  'last Option',
].map(createOption);

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Search,
  componentPath: '..',

  componentProps: setState => ({
    dataHook: storySettings.dataHook,
    value: '',
    options,
    showOptionsIfEmptyInput: false,
    closeOnSelect: false,

    onChange: e => setState({ value: e.target.value }),

    onSelect: option => setState({ value: option.value }),
  }),

  exampleProps: {
    onSelect: option => option.value,
    onChange: e => e.target.value,
    options: [
      { label: 'One option', value: [createOption('Just me :)')] },
      { label: `${options.length} options`, value: options },
    ],
  },

  examples: (
    <div>
      <Markdown source="## Expandable" />
      <Expandable />

      <Markdown source="## Predicate" />
      <Predicate />
    </div>
  ),
};
