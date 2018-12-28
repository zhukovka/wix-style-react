import React from 'react';
import * as Composite from '../Composite';
import Label from '../Label';
import Input from '../Input';
import InputAreaWithLabelComposite from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite';

import deprecationLog from '../utils/deprecationLog';

deprecationLog(
  `Using "TextField" is deprecated. Please see "3.1 TextField" updated documentation for a composite usage of "FormField" and "Input".`,
);

const TextField = ({ children, ...props }) => (
  <InputAreaWithLabelComposite {...props}>
    {children}
  </InputAreaWithLabelComposite>
);

TextField.propTypes = {
  children: Composite.children(
    Composite.optional(Label),
    Composite.once(Input),
  ),
};

TextField.defaultProps = {
  appendToParent: false,
};

TextField.displayName = 'TextField';

export default TextField;
