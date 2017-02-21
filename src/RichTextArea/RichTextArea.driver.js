import React from 'react';
import {render} from 'react-dom';
// import ReactTestUtils from 'react-addons-test-utils';
import RichTextArea from './RichTextArea';

const richTextAreaDriverFactory = ({component, wrapper}) => {
  return {
    exists: () => !!component,
    getContent: () => component.textContent,
    enterText: () => {
      //TODO: implement :)
    },
    setProps: props => render(<div ref={r => component = r.childNodes[0]}><RichTextArea {...props}/></div>, wrapper),
  };
};

export default richTextAreaDriverFactory;
