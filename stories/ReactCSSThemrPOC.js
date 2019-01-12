import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../src/Input';
import InputWithOptions from '../src/InputWithOptions';

import { ThemeProvider } from 'react-css-themr';

import composersInputStyles from '../src/themes/composers/Input.scss';
import composersDropdownStyles from '../src/themes/composers/InputWithOptions.scss';
import composersTheme from '../src/themes/composers';

storiesOf('Components', module).add('react-css-themr POC', () => {
  return (
    <div>
      <h1>react-css-themr POC</h1>
      <h2>Simple Theming</h2>
      <div>
        <h3>Regular WSR Input</h3>
        <Input value="hello" />
        <h3>Composers themed Input</h3>
        <Input value="hello" theme={composersInputStyles} />
        <h3>Composers themed with Provider</h3>
        <ThemeProvider theme={composersTheme}>
          <Input value="hello" />
        </ThemeProvider>
      </div>
      <h2>Nested Theming</h2>
      <div>
        <h3>Regular WSR InputWithOptions</h3>
        <InputWithOptions
          options={[{ id: '1', value: '1' }, { id: '2', value: '2' }]}
        />
        <h3>
          Composers themed InputWithOptions (will apply only first level, not
          nested)
        </h3>
        <InputWithOptions
          options={[{ id: '1', value: '1' }, { id: '2', value: '2' }]}
          theme={composersDropdownStyles}
        />
        <h3>Composers themed InputWithOptions with Provider</h3>
        <ThemeProvider theme={composersTheme}>
          <InputWithOptions
            options={[{ id: '1', value: '1' }, { id: '2', value: '2' }]}
          />
        </ThemeProvider>
      </div>
    </div>
  );
});
