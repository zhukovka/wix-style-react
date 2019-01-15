import React from 'react';
import * as Composite from '../Composite';
import RichTextArea from '../RichTextArea';
import Label from '../Label';
import InputAreaWithLabelComposite from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite';

const RichTextAreaComposite = ({ children, ...props }) => (
  <InputAreaWithLabelComposite {...props}>
    {children}
  </InputAreaWithLabelComposite>
);

RichTextAreaComposite.propTypes = {
  children: Composite.children(
    Composite.optional(Label),
    Composite.once(RichTextArea),
  ),
};

RichTextAreaComposite.displayName = 'RichTextAreaComposite';

export default RichTextAreaComposite;
