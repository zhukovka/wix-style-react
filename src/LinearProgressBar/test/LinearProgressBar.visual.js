import React from 'react';
import { storiesOf } from '@storybook/react';
import LinearProgressBar from '../LinearProgressBar';
import { storySettings } from './storySettings';

const commonProps = {
  dataHook: storySettings.dataHook,
};

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default render',
        props: { value: 20 },
      },
      {
        it: 'error',
        props: { value: 20, error: true },
      },
      {
        it: 'showProgressIndication',
        props: { value: 20, showProgressIndication: true },
      },
    ],
  },
  {
    describe: 'light theme',
    its: [
      {
        it: 'regular state',
        props: { value: 20, light: true },
      },
      {
        it: 'with error',
        props: { value: 20, light: true, error: true },
      },
    ],
  },
  {
    describe: 'icons',
    its: [
      {
        it: 'success state',
        props: { value: 100, showProgressIndication: true },
      },
      {
        it: 'error state',
        props: {
          value: 30,
          showProgressIndication: true,
          error: true,
          errorMessage: 'Some error',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`LinearProgressBar/${describe}`, module).add(it, () => (
      <div style={{ width: '40%' }}>
        <LinearProgressBar {...commonProps} {...props} />
      </div>
    ));
  });
});
