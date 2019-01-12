import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../src/Input';

import { ThemeProvider } from 'react-css-themr';

import composersInputStyles from '../src/themes/composers/Input.scss';
import composersTheme from '../src/themes/composers';

storiesOf('Components', module).add('react-css-themr POC', () => {
  return (
    <div>
      <h1>react-css-themr POC</h1>
      <h2>Theming an input</h2>
      <h3>Regular WSR Input</h3>
      <Input value="hello" />
      <h3>Composers themed Input</h3>
      <Input value="hello" theme={composersInputStyles} />
      <h3>Composers themed with Provider</h3>
      <ThemeProvider theme={composersTheme}>
        <Input value="hello" />
      </ThemeProvider>
    </div>
  );
});
