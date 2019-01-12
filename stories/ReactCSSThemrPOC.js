import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../src/Input';

storiesOf('Components', module).add('react-css-themr POC', () => {
  return (
    <div>
      <h1>react-css-themr POC</h1>
      <h2>Theming an input</h2>
      <h3>regular WSR Input</h3>
      <Input />
    </div>
  );
});
