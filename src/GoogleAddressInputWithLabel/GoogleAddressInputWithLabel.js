import React from 'react';
import * as Composite from '../Composite';
import Label from '../Label';
import GoogleAddressInput from '../GoogleAddressInput';
import InputAreaWithLabelComposite from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite';

const GoogleAddressInputWithLabel = ({ children, ...props }) => (
  <InputAreaWithLabelComposite {...props}>
    {children}
  </InputAreaWithLabelComposite>
);

GoogleAddressInputWithLabel.propTypes = {
  children: Composite.children(
    Composite.optional(Label),
    Composite.once(GoogleAddressInput),
  ),
};

GoogleAddressInputWithLabel.displayName = 'GoogleAddressInputWithLabel';

export default GoogleAddressInputWithLabel;
