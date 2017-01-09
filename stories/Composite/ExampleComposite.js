import React, {Component, Children} from 'react';

import {children, optional, once} from '../../src/Composite/CompositeValidation';

const Label = () => (<div>Label</div>);
const Input = () => (<div>Input</div>);

const TextField = ({ children }) => {
  const [label, input] = Children.toArray(children);
  return (
    <div>
      <div>{input}</div>
      <div>{label}</div>
    </div>
  );
};

TextField.propTypes = {
  children: children(once(Label), once(Input))
};

export default () =>
  <div>
    <TextField>
      <Label/>
      <Input/>
    </TextField>
  </div>;
