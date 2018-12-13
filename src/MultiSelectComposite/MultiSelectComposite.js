import React from 'react';
import { bool, node } from 'prop-types';
import * as Composite from '../Composite';
import Label from '../Label';
import MultiSelect from '../MultiSelect';
import InputAreaWithLabelComposite from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite';

const MultiSelectComposite = ({ children, ...props }) => (
  <InputAreaWithLabelComposite {...props}>
    {children}
  </InputAreaWithLabelComposite>
);

MultiSelectComposite.propTypes = {
  children: Composite.children(
    Composite.optional(Label),
    Composite.once(MultiSelect),
  ),
  required: bool,
  appendToParent: bool,
  info: node,
  tooltip: node,
};

MultiSelectComposite.displayName = 'MultiSelectComposite';

export default MultiSelectComposite;
