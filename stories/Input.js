import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Markdown from './utils/Components/Markdown';
import Input from '../src/Input';
import InputReadme from '../src/Input/README.md';

const InputWrapper = props =>
  <Input
    placeholder="Search..."
    onChange={action('changed')}
    onBlur={action('blurred')}
    onFocus={action('focused')}
    onEnterPressed={action('enter pressed')}
    onEscapePressed={action('escape pressed')}
    onKeyDown={action('key down')}
    {...props}
    />;

storiesOf('Input', module)
  .add('Standard', () => (
    <div>
      <Markdown source={InputReadme}/>

      <h1>Examples</h1>

      <div>
        <h3>Input</h3>
        <InputWrapper/>
      </div>

      <div>
        <h3>Focus</h3>
        <InputWrapper forceFocus/>
      </div>

      <div>
        <h3>Hover</h3>
        <InputWrapper forceHover/>
      </div>

      <div>
        <h3>Error</h3>
        <InputWrapper error/>
      </div>

      <div>
        <h3>Magnifying Glass</h3>
        <InputWrapper magnifyingGlass/>
      </div>

      <div>
        <h3>Unit</h3>
        <InputWrapper unit="#"/>
      </div>

      <div>
        <h3>RTL</h3>
        <InputWrapper rtl placeholder="חפש..."/>
      </div>
    </div>
  ));
