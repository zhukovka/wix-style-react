import React from 'react';
import {render} from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import RichTextArea from './RichTextArea';
import styles from './RichTextArea.scss';

const richTextAreaDriverFactory = ({component, componentInstance, wrapper}) => {
  const getButtons = () => [...component.querySelectorAll('[data-hook*="rich-text-area-button"]')];
  const getButtonType = button => button.getAttribute('data-hook').replace(/^rich-text-area-button-/, '');
  const getButtonByType = type => getButtons().find(button => getButtonType(button) === type);
  const clickButtonByType = type => () => ReactTestUtils.Simulate.mouseDown(getButtonByType(type));

  return {
    exists: () => !!component,
    getButtonTypes: () => getButtons().map(getButtonType),
    clickBoldButton: clickButtonByType('bold'),
    clickItalicButton: clickButtonByType('italic'),
    clickUnderlineButton: clickButtonByType('underline'),
    clickUnorderedListButton: clickButtonByType('unordered-list'),
    clickOrderedListButton: clickButtonByType('ordered-list'),
    getContent: () => component.childNodes[1].textContent,
    enterText: text => {
      const editorState = componentInstance.state.editorState;
      const newEditorState = editorState
        .transform()
        .insertText(text)
        .apply();

      componentInstance.setEditorState(newEditorState);
    },
    isErrorIndicatorVisible: () => Boolean(component.classList.contains(styles.withError)),
    isDisabled: () => (
      getButtons().every(button => button.classList.contains(styles.disabled)) &&
      component.childNodes[1].classList.contains(styles.disabled)
    ),
    setProps: props => render(
      <div ref={r => component = r.childNodes[0]}>
        <RichTextArea ref={r => componentInstance = r} {...props}/>
      </div>,
      wrapper
    ),
  };
};

export default richTextAreaDriverFactory;
