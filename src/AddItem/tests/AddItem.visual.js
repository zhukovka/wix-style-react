import React from 'react';
import { storiesOf } from '@storybook/react';
import AddItem from '..';

const defaultProps = {
  label: 'String',
  value: 'Add New Item',
};

const tests = [
  {
    describe: 'alignItems',
    its: [
      {
        it: 'center',
        props: {
          alignItems: 'center',
        },
      },
      {
        it: 'right',
        props: {
          alignItems: 'right',
        },
      },
      {
        it: 'left',
        props: {
          alignItems: 'left',
        },
      },
    ],
  },
  {
    describe: 'theme',
    its: [
      {
        it: 'dashes',
        props: { theme: 'dashes' },
      },
      {
        it: 'plain',
        props: { theme: 'plain' },
      },
      {
        it: 'filled',
        props: { theme: 'filled' },
      },
      {
        it: 'image',
        props: { theme: 'image' },
      },
    ],
  },
  {
    describe: 'disabled theme',
    its: [
      {
        it: 'dashes',
        props: { disabled: true, theme: 'dashes' },
      },
      {
        it: 'plain',
        props: { disabled: true, theme: 'plain' },
      },
      {
        it: 'filled',
        props: { disabled: true, theme: 'filled' },
      },
      {
        it: 'image',
        props: { disabled: true, theme: 'image' },
      },
    ],
  },
  {
    describe: 'size',
    its: [
      {
        it: 'tiny',
        props: { size: 'tiny' },
      },
      {
        it: 'small',
        props: { size: 'small' },
      },
      {
        it: 'medium',
        props: { size: 'medium' },
      },
      {
        it: 'large',
        props: { size: 'large' },
      },
    ],
  },

  // {
  //   describe: '',
  //   its: [
  //     {
  //       it: '',
  //       props: {},
  //     },
  //   ],
  // },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`AddItem/${describe}`, module).add(it, () => (
      <AddItem {...defaultProps} {...props} />
    ));
  });
});
