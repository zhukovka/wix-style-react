import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind, Category } from '../storiesHierarchy';

import Input from '../../src/Input';
import Search from '../../src/new-icons/Search';

const defaultProps = {
  value: 'Some text value...',
};

const groupSuffix = (
  <Input.Group>
    <Input.CustomAffix>$</Input.CustomAffix>
    <Input.IconAffix>
      <Search />
    </Input.IconAffix>
  </Input.Group>
);
const kind = getTestStoryKind({
  category: Category.COMPONENTS,
  storyName: 'Input',
});
storiesOf(kind, module).add('1. Input with suffix group', () => {
  return (
    <div>
      <h1>Input with group suffix and loading state</h1>
      <br />
      <Input {...defaultProps} status={'loading'} suffix={groupSuffix} />
      <h1>Input with group suffix and error state</h1>
      <br />
      <Input {...defaultProps} status={'error'} suffix={groupSuffix} />
    </div>
  );
});

storiesOf(kind, module).add('2. Input with prefix group', () => {
  return (
    <div>
      <h1>Input with group prefix</h1>
      <br />
      <Input {...defaultProps} prefix={groupSuffix} />
      <h1>Input with custom prefix</h1>
      <br />
      <Input
        {...defaultProps}
        prefix={<Input.CustomAffix>@</Input.CustomAffix>}
      />
      <h1>Input with custom textual prefix</h1>
      <br />
      <Input {...defaultProps} prefix="https://" />
    </div>
  );
});
