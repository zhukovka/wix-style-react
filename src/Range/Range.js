import React from 'react';
import * as Composite from '../Composite';
import Label from '../Label';
import Input from '../Input';
import DatePicker from '../DatePicker';
import RangeInputWithLabelComposite from '../Composite/RangeInputWithLabelComposite/RangeInputWithLabelComposite';

const Range = ({ children, ...props }) => (
  <RangeInputWithLabelComposite {...props}>
    {children}
  </RangeInputWithLabelComposite>
);

Range.propTypes = {
  ...RangeInputWithLabelComposite.propTypes,
  children: Composite.children(
    Composite.optional(Label),
    Composite.oneOf(Input, DatePicker),
    Composite.oneOf(Input, DatePicker),
  ),
};

Range.displayName = 'Range';

export default Range;
