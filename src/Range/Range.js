import React from 'react';
import {children, optional, once} from '../Composite';
import Label from '../Label';
import Input from '../Input';
import RangeInputWithLabelComposite from '../Composite/RangeInputWithLabelComposite/RangeInputWithLabelComposite';

const Range = ({...props, children}) => (
  <RangeInputWithLabelComposite {...props}>
    {children}
  </RangeInputWithLabelComposite>
);

Range.propTypes = {
  children: children(optional(Label), once(Input), once(Input))
};

Range.displayName = 'Range';

export default Range;
