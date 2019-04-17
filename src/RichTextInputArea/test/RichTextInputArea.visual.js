import React from 'react';
import { storiesOf } from '@storybook/react';

import RichTextInputArea from '..';

const placeholderText = 'Default text goes here';

const tests = [
  {
    describe: 'Editor',
    its: [
      {
        it: 'Bold',
        props: {
          initialValue: `<p><strong>Text</strong></p>`,
        },
      },
      {
        it: 'Italic',
        props: {
          initialValue: `<p><em>Text</em></p>`,
        },
      },
      {
        it: 'Underline',
        props: {
          initialValue: `<p><u>Text</u></p>`,
        },
      },
      {
        it: 'Bulleted list',
        props: {
          initialValue: `<ul><li>Text</li><li>Text</li><li>Text</li></ul>`,
        },
      },
      {
        it: 'Numbered list',
        props: {
          initialValue: `<ol><li>Text</li><li>Text</li><li>Text</li></ol>`,
        },
      },
      {
        it: 'Link',
        props: {
          initialValue: `<p><a href="http://wix.com">Text</a></p>`,
        },
      },
    ],
  },
  {
    describe: 'Placeholder',
    its: [
      {
        it: 'Basic',
        props: {
          placeholder: placeholderText,
        },
      },
      {
        it: 'Hidden when editor has text',
        props: {
          placeholder: placeholderText,
          initialValue: 'Some text',
        },
      },
    ],
  },
  {
    describe: 'Disabled',
    its: [
      {
        it: 'Basic',
        props: {
          initialValue: 'Some text',
          disabled: true,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`RichTextInputArea/${describe}`, module).add(it, () => (
      <RichTextInputArea {...props} />
    ));
  });
});
